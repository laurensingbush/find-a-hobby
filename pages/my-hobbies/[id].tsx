import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import type { NextPage, GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import { removeHobby } from '../../utils/fetchLikes';
import formatHistorySection from '../../utils/formatHistorySection';
import Layout from '../../components/Layout';
import Tooltip from '../../components/Tooltip';
import NextImage from '../../components/NextImage';


type MyHobbyProps = {
    id: number;
    title: string;
    summary?: string;
    history?: string;
    urlTitle: string;
    imageUrl?: string;
    categoryId: number;
    users: {userId: number, newHobby: boolean}[];
};

const Heading: React.FC<{level: number, children: React.ReactNode}> = ({level, ...children }) => {
    return React.createElement(`h${level}`, children);
};

const HistorySection: React.FC<{history?: string}> = ({ history }) => {
    const hobbyHistory = history && formatHistorySection(history);
    let content = null;
    if (Array.isArray(hobbyHistory)) {
        content = (
            hobbyHistory.map((section, index) => (
                <section key={index}>
                    <Heading level={section.level}>{section.heading}</Heading>
                    {section.content && <p>{section.content}</p>}
                </section>
            ))
        )
    } else {
        content = (
            <p>{hobbyHistory}</p>
        )
    };
    return (
        <section className='history'>
            <h2>History</h2>
            <hr />
            {content}
        </section>
    );
};

const MyHobby: NextPage<{myHobby: MyHobbyProps}> = ({ myHobby }) => {
    const { data: session, status } = useSession();
    const validSession = Boolean(session);
    const getUser: {userId: number, newHobby: boolean}[] = myHobby?.users?.filter(user => user.userId === session?.user?.userId);
    const isNewHobby: boolean = getUser[0]?.newHobby;
    const hobbySummary = myHobby?.summary?.slice(0, myHobby.summary.lastIndexOf('.') + 1);
    const metaDescription = myHobby?.summary?.slice(0, myHobby.summary.indexOf('.') + 1);
 
    const removeLike = async () => {
        await removeHobby(myHobby.id);
        await Router.push('/my-hobbies');
    };

    if (status === 'loading') {
        return ( 
            <Layout>
                <div className='loading-container'>
                    <div className='loading'></div>
                </div>
            </Layout>
        );
    };
    
    return (
        <>
            <NextSeo
                title={myHobby.title}
                titleTemplate='%s - My Hobbies - Find-A-Hobby'
                description={metaDescription}
                openGraph={{
                    url: `https://find-a-hobby.vercel.app/my-hobbies/${myHobby.id}`
                }}
            />
            <Layout>
                <article className='myHobby-id-container'>
                    {myHobby.imageUrl && (
                        <figure>
                            <NextImage
                                src={myHobby.imageUrl}
                                alt={myHobby.title}
                                layout='fill'
                                className='myhobby-img'
                            />
                        </figure>
                    )}
                    <div className='title'>
                        <h1>{myHobby?.title}</h1>
                        {validSession && getUser.length !== 0 && (
                            <div className='btn'>
                                <Tooltip type='remove-like' isNewHobby={isNewHobby}>
                                    <button onClick={removeLike}>
                                        <AiFillCheckCircle />
                                    </button>
                                </Tooltip>
                                <span>{isNewHobby ? 'New Hobbies' : 'Current Hobbies'}</span>
                            </div>
                        )}
                    </div>
                    <hr />
                    <p>{hobbySummary}</p>
                    {myHobby.history && <HistorySection history={myHobby.history} />}
                </article>
            </Layout>
        </>
    );
};

export default MyHobby;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const myHobby = await prisma.hobby.findUnique({
        where: {
            id: Number(params?.id)
        },
        include: {
            users: {
                select: {
                    userId: true,
                    newHobby: true
                }
            }
        }
    });

    return {
        props: { 
            myHobby
        }
    };
};