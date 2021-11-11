import { UserLike } from '@prisma/client'

// add hobby to user's likes
export const addHobby = async (newLike: UserLike): Promise<void> => {
    try {
        const body = { hobbyId: newLike.hobbyId, newHobby: newLike.newHobby };
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        await fetch('http://localhost:3000/api/hobby', options);
    } catch (error) {
        console.error(error);
    };
};

// remove hobby from user's likes
export const removeHobby = async (hobbyId: number): Promise<void> => {
    try {
        await fetch(`http://localhost:3000/api/hobby/${hobbyId}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error(error);
    };
};