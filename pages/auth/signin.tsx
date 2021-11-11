import React from 'react';
import { SiGithub } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc';
import type { NextPage, GetServerSideProps } from 'next';
import { signIn, getProviders, getSession, ClientSafeProvider } from "next-auth/react";
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

type Props = {
    providers: ClientSafeProvider[];
};
type Errors = {
    [key: string]: string;
};

const errors: Errors = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email address.',
  CredentialsSignin: 'Sign in failed. Check the details you provided are correct.',
  default: 'Unable to sign in.',
};

const SignInError: React.FC<{error: string | undefined}> = ({ error }) => {
    const errorMessage = error && (errors[error] ?? errors.default);
    return (
        <div className='error-msg'>
            {errorMessage}
        </div>
    );
};

const SignIn: NextPage<Props> = ({ providers }) => {
    const router = useRouter();
    const error = router.query.error as string | undefined;
   
    return (
        <Layout>
            <div className='signin-container'>
                <h2>Sign in</h2>
                {error && <SignInError error={error} />}
                {providers && Object.values(providers).map((provider) => (
                    <button key={provider.name} onClick={() => signIn(provider.id)}>
                        {provider.name === 'GitHub' ? <SiGithub /> : <FcGoogle />}
                        Continue with {provider.name}
                    </button>
                ))}
            </div>
        </Layout>
    );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: { 
                destination: '/',
                permanent: false
            }
        };
    };

    return {
        props: { 
            providers: await getProviders()
        }
    };
};