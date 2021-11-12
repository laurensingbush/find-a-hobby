import React, { useState, useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { UserLike, Hobby } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useRequest } from '../lib/hooks/useRequest';
import { useSWRConfig } from 'swr';
import { addHobby, removeHobby } from '../utils/fetchLikes';
import LikeButton from './LikeButton';

type Props = {
    currentHobby?: Hobby;
};

const ModalHobbyContent: React.FC<Props> = ({ currentHobby }) => {
    const { data: session } = useSession();
    const { mutate } = useSWRConfig();
    const { data, error, isValidating } = useRequest<UserLike[]>(`/api/likes`);
    const [isLiked, setIsLiked] = useState<UserLike | null>(null);
    const currentHobbySummary = currentHobby?.summary && currentHobby.summary.slice(0, currentHobby.summary.indexOf('.') + 1);
  
    useEffect(() => {
        const checkLiked = () => {
            const getLiked = data?.filter(like => like.hobbyId === currentHobby?.id);
            getLiked && getLiked[0] ? setIsLiked(getLiked[0]) : setIsLiked(null);
        };
        checkLiked();
    }, [data, currentHobby?.id]);

    const handleLikeClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!session) {
            return alert(`Please sign in to add "${currentHobby?.title}" to your hobbies.`);
        };
        if (!currentHobby) {
            console.log('currentHobby is undefined');
            return null;
        };

        const currentHobbyId: number = Number(e.currentTarget.getAttribute('data-id'));
        const isNewHobby: boolean = Boolean(JSON.parse(e.currentTarget.value));

        if (isLiked) {
            const filteredLikes = data?.filter(like => like.hobbyId !== currentHobbyId);
            // update local data immediately and disable revalidation
            mutate('/api/likes', filteredLikes, false);

            // send request to API to update the db
            await removeHobby(currentHobbyId);

            // trigger revalidation to make sure local data is correct
            mutate('/api/likes');
      
        } else {
            const newLike: UserLike = {userId: session?.user?.userId, hobbyId: currentHobbyId, newHobby: isNewHobby};
            const newData: UserLike[] = data || [];
            mutate('/api/likes', [...newData, newLike], false);
            await addHobby(newLike);
            mutate('api/likes');
        }; 
    };
    
    return (
        <div className='modal-hobby-content-container'>
            <div className='modal-img'>
                {currentHobby?.imageUrl && (
                    <img src={currentHobby.imageUrl} alt={`${currentHobby.title} image`} />
                )}
            </div>
            <div className='modal-content'>
                <div className='modal-description'>
                    <h3>{currentHobby?.title}</h3>
                    <p>{currentHobbySummary}</p>
                    <a href={`https://en.wikipedia.org/wiki/${currentHobby?.urlTitle}`} rel='noreferrer' target='_blank'>
                        More Info
                        <BiLinkExternal />
                    </a>
                </div>
                {isValidating ? (
                    <div className='loading'></div>
                ) : error ? (
                    <div>Failed to load.</div>
                ) : (
                    <div className='like-btns'>
                        <LikeButton currentHobby={currentHobby} handleLikeClick={handleLikeClick} isLiked={isLiked} newHobby={false} />
                        <LikeButton currentHobby={currentHobby} handleLikeClick={handleLikeClick} isLiked={isLiked} newHobby={true} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalHobbyContent;