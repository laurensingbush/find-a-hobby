import React from 'react';
import Link from 'next/link';
import type { NextPage, GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { useSession, getSession } from 'next-auth/react';
import { Hobby } from '@prisma/client';
import prisma from '../lib/prisma';
import Layout from '../components/Layout';
import MyHobbyList from '../components/MyHobbyList';

type Props = {
    currentHobbies: Hobby[];
    newHobbies: Hobby[];
};

const MyHobbies: NextPage<Props> = ({ currentHobbies, newHobbies }) => {
    const { data: session, status } = useSession();

    if (typeof window !== 'undefined' && status === 'loading') return null;
  
    if (!session) {
        return (
            <Layout>
                <div className='unauthorized'>
                    <p>You must be signed in to view your list of hobbies.</p>
                    <Link href='/auth/signin' passHref>
                        <button>
                            <a>Sign in</a>
                        </button>
                    </Link>
                </div>
            </Layout>
        );
    };

    return (
        <>
            <NextSeo
                title='My Hobbies'
                titleTemplate='%s - Find-A-Hobby'
                description="A curated list of your current hobbies and hobbies you'd like to try."
            />
            <Layout>
                <div className='my-hobbies-container'>
                    <h2><span>Current Hobbies</span></h2>
                    <MyHobbyList myHobbies={currentHobbies} />
                    <h2><span>New Hobbies</span></h2>
                    <MyHobbyList myHobbies={newHobbies} />
                </div>
            </Layout>
        </>
    );
};

export default MyHobbies;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    const currentHobbies = await prisma.hobby.findMany({
        where: {
            users: {
                some: {
                    newHobby: false,
                    user: {
                        email: session?.user?.email || undefined
                    }
                }
            }

        }
    });
    const newHobbies = await prisma.hobby.findMany({
        where: {
            users: {
                some: {
                    newHobby: true,
                    user: {
                        email: session?.user?.email || undefined
                    }
                }
            }

        }
    });
  
    return {
        props: {
            session,
            currentHobbies,
            newHobbies
        }
    };
};
