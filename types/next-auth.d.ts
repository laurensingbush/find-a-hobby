import NextAuth, { DefaultUser } from 'next-auth';

// Define Session interface
declare module 'next-auth' {
    interface User extends DefaultUser {
        userId: number;
    };

    // Returned by `useSession`, `getSession`, and recieved as a prop on the `SessionProvider` React Context
    interface Session {
        user: User;
    };
};