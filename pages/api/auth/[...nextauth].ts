import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from "../../../lib/prisma";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        error: '/auth/signin'
    },
    callbacks: {
        async session({ session, user}) {
            session.user.userId = Number(user.id);
            return Promise.resolve(session);
        }
    },
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET
});
