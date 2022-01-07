import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client';
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

// POST api/hobby
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    const { hobbyId, newHobby } = req.body;
    try {
        const result = await prisma.userLike.create({
            data: {
                newHobby: newHobby,
                hobby: { connect: { id: hobbyId }},
                user: { connect: { id: session?.user?.userId}}
            }
        });
        res.status(200).json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError) {
            console.error(error.message);
        };
        res.status(500).json({error: 'Internal server error.'})
    };
};