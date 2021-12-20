import React from 'react';
import Router from 'next/router';
import { Hobby } from '@prisma/client';
import NextImage from './NextImage';

type Props = {
    myHobbies: Hobby[]
}

const MyHobbyList: React.FC<Props> = ({ myHobbies }) => {
    return (
        <div className='my-hobbylist-container'>
            {myHobbies?.map((myHobby) => (
                <div className='hobby-item' key={myHobby.id} onClick={() => Router.push('/my-hobbies/[id]', `/my-hobbies/${myHobby.id}`)}>
                        {myHobby.imageUrl ? (
                            <div className='hobby-img-container'>
                                <NextImage 
                                    src={myHobby.imageUrl} 
                                    alt={myHobby.title} 
                                    layout='fill'
                                    className='myhobbylist-img'
                                />
                            </div>
                        ) : (
                            <div className='no-img'></div>
                        )}
                    <div className='img-overlay'>
                        <p>{myHobby.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyHobbyList;