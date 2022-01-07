import React, { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useRequest } from '../lib/hooks/useRequest';
import { SiGithub } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc';
import Modal, { ModalHandle } from './Modal';

export type AccountProvider = {
    provider: string;
};

const DynamicModalContent = dynamic(() => import('../components/ModalUserContent'));

const NavBar: React.FC = () => {
    const { data: session, status } = useSession();
    const { data } = useRequest<AccountProvider>(session ? `/api/auth/provider` : null);
    const router = useRouter();
    const modalRef = useRef<ModalHandle>(null);

    const isActive: (pathname: string) => boolean = (pathname) =>
        router.pathname === pathname;
    
    return (
        <>
            <nav>
                <div className='left'>
                    <Link href='/'>
                        <a className={(isActive('/') ? 'bold' : '')}>
                            Find-A-Hobby
                        </a>
                    </Link>
                </div>
                <div className={`right ${!session && status === 'loading' ? 'loading' : 'loaded'}`}>
                    {session?.user ? (
                        <>
                            <Link href='/my-hobbies'>
                                <a className={`my-hobbies ${(isActive('/my-hobbies') ? 'bold' : '')}`} >
                                    My Hobbies
                                </a>
                            </Link>
                            <div className='user-circle' onClick={() => modalRef.current?.openModal()}>
                                {data?.provider && (
                                    data.provider === 'github' ? <SiGithub /> : <FcGoogle />
                                )}
                            </div>
                        </>
                    ) : (
                        <Link href='/auth/signin'>
                            <a className={`signin ${(isActive('/auth/signin') ? 'bold' : '')}`}>
                                Sign in
                            </a>
                        </Link>
                    )}
                </div>
            </nav>
            <Modal ref={modalRef} className='user'>
                <DynamicModalContent modalRef={modalRef} accountProvider={data} />
            </Modal>
        </>
    );
};

export default NavBar;