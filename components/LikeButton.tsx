import React from 'react';
import { UserLike, Hobby } from '@prisma/client';
import { BsPlusCircle } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import Tooltip from './Tooltip';

type Props = {
    currentHobby?: Hobby;
    handleLikeClick: React.MouseEventHandler<HTMLButtonElement>;
    isLiked: UserLike | null;
    newHobby: boolean;
};

const LikeButton: React.FC<Props> = ({ currentHobby, newHobby, handleLikeClick, isLiked }) => {
    return (
        <div className='like-btn-container'>
            <p>{newHobby ? 'New Hobby' : 'Current Hobby'}</p>
            <div className='btn'>
                <Tooltip type='like' isLiked={isLiked} isNewHobby={newHobby}>
                    <button
                        value={newHobby.toString()} 
                        data-id={currentHobby?.id.toString()}
                        onClick={(e) => handleLikeClick(e)}
                        disabled={!isLiked ? false : isLiked && isLiked.newHobby === newHobby ? false : true} 
                        aria-label={isLiked ? 'remove hobby' : 'add hobby'}
                    >
                        {isLiked && isLiked.newHobby === newHobby
                            ?   <AiFillCheckCircle />
                            :   <BsPlusCircle />
                        }   
                    </button>
                </Tooltip>
            </div>
        </div>
    );
};

export default LikeButton;