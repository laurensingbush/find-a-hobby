import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client';
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

// DELETE & GET /api/hobby/:id
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });
    const hobbyId = req.query.id;
  
    if (req.method === 'DELETE') {
        try {
            const deleteUserLike = await prisma.userLike.delete({
                where: {
                    userId_hobbyId: {
                        userId: session?.user?.userId!,
                        hobbyId: Number(hobbyId)
                    }
                }
            });
            res.json(deleteUserLike);
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError) {
                console.error(error.message);
            };
            res.status(500).json({error: 'Internal server error.'});
        }
    } else if (req.method === 'GET') {
        try {
            const userLike = await prisma.userLike.findUnique({
                where: {
                    userId_hobbyId: {
                        userId: session?.user?.userId!,
                        hobbyId: Number(hobbyId)
                    }
                }
            });
            const result = userLike !== null ? userLike : null;
            res.json(result);
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError) {
                console.error(error.message);
            };
            res.status(500).json({error: 'Internal server error.'});
        }
    } else {
        throw new Error(`The HTTP ${req.method} is not supported at this route.`);
    };
};