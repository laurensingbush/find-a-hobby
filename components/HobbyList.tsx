import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ImCircleUp } from 'react-icons/im';
import { Hobby } from '@prisma/client';
import Modal, { ModalHandle } from './Modal';
import Tooltip from './Tooltip';

type Props = {
    hobbies: Hobby[];
};

const DynamicModalContent = dynamic(() => import('../components/ModalHobbyContent'));

const HobbyList: React.FC<Props> = ({ hobbies }) => {
    const modalRef = useRef<ModalHandle>(null);
    const [currentHobby, setCurrentHobby] = useState<Hobby>();
   
    return (
        <>
            <div className='hobbylist-container'>
                <div className='hobby-items'>
                    {hobbies?.map((hobby: Hobby) => (
                        <div className='hobby-item' key={hobby.id}>
                            <div className='btn'>
                                <Tooltip type='modal'>
                                    <button onClick={() => {modalRef.current?.openModal(); setCurrentHobby(hobby)}} aria-label='open modal'>
                                        <ImCircleUp />
                                    </button>
                                </Tooltip>
                            </div>
                            <p>{hobby.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Modal ref={modalRef} className='hobby-list'>
                <DynamicModalContent currentHobby={currentHobby} />
            </Modal>
        </>
    );
};

export default HobbyList;