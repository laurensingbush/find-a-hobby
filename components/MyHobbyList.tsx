import React from 'react';
import Router from 'next/router';
import { Hobby } from '@prisma/client';

type Props = {
    myHobbies: Hobby[]
}

const MyHobbyList: React.FC<Props> = ({ myHobbies }) => {
    return (
        <div className='my-hobbylist-container'>
            {myHobbies?.map((myHobby) => (
                <div className='hobby-item' key={myHobby.id} onClick={() => Router.push('/my-hobbies/[id]', `/my-hobbies/${myHobby.id}`)}>
                    {myHobby.imageUrl ? (
                        <img src={myHobby.imageUrl} alt={`${myHobby.title} image`} aria-label='hobby image' />
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