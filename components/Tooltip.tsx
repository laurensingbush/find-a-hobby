import React, { useEffect } from 'react';
import { setTimeout, clearTimeout } from 'timers';
import { UserLike } from '.prisma/client';
import { useBoolean } from '../lib/hooks/useBoolean';

type Props = {
    type: string;
    isLiked?: UserLike | null;
    isNewHobby?: boolean;
    children: React.ReactNode;
};

const Tooltip: React.FC<Props> = ({ type, isLiked, isNewHobby, children }) => {
    const [isActive, toggleShow, toggleHide] = useBoolean(false);
    const hobbyType = isNewHobby ? 'New Hobbies' : 'Current Hobbies';

     useEffect(() => {
        // show tooltip after 400ms
        let timeout: NodeJS.Timeout;
        if (isActive) {
            timeout = setTimeout(() => { toggleShow() }, 400);
        };

        return () => {
            clearTimeout(timeout);
        }
    }, [isActive, toggleShow]);

    return (
         <div className='tooltip-container' onMouseEnter={toggleShow} onMouseLeave={toggleHide} >
            {children}
            {isActive && type === 'like' && (
                <div className={`tooltip-content ${isLiked && isLiked.newHobby !== isNewHobby ? 'hide' : ''}`}>
                    {isLiked && isLiked.newHobby === isNewHobby
                        ? `Remove from ${hobbyType}`
                        : `Add to ${hobbyType}` 
                    }
                </div>
            )}
            {isActive && type === 'remove-like' && (
                <div className='tooltip-content'>
                    Remove from {hobbyType}
                </div>
            )}
            {isActive && type === 'modal' && (
                <div className='tooltip-content'>
                    More info
                </div>
            )}
        </div>
    );
};

export default Tooltip;