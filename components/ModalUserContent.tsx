import React, { RefObject } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { SiGithub } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc';
import { ModalHandle } from './Modal';
import { AccountProvider } from './NavBar';

type Props = {
    modalRef: RefObject<ModalHandle>;
    accountProvider?: AccountProvider;
};

const ModalUserContent: React.FC<Props> = ({ modalRef, accountProvider }) => {
    const { data: session} = useSession();

    return (
        <ul className='modal-user-content-container'>
            <li className='provider'>
                {accountProvider && (
                    accountProvider.provider === 'github' ? <SiGithub /> : <FcGoogle />
                )}
            </li>
            <li className='username'>
                <p>Signed in as <span>{session?.user?.name || session?.user?.email}</span></p>
            </li>
            <li className='btn'>
                <button onClick={() => {signOut(); modalRef.current?.closeModal()}}>
                    Sign out
                </button>
            </li>
        </ul>
    );
};

export default ModalUserContent;