import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client';
import prisma from '../../lib/prisma';
import { getSession } from 'next-auth/react';

// GET api/likes
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await getSession({ req });
        const userLikes = await prisma.userLike.findMany({
            where: {
                userId: session?.user?.userId
            }
        });
        const result = userLikes !== null ? userLikes : null;
        res.json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError) {
            console.error(error.message);
        };
        res.status(500).json({error: 'Internal server error.'})
    }; 
};