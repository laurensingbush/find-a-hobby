import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client'
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

// GET /api/auth/provider
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session = await getSession({ req });
        const accountProvider = await prisma.user.findUnique({
            where: {
                id: session?.user?.userId
            },
            select: {
                accounts: {
                    select: {
                        provider: true
                    }
                }
            }
        });
        const result = accountProvider?.accounts[0];
        res.json(result);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError) {
            console.error(error.message);
        };
        res.status(500).json({error: 'Internal server error.'});
    };
};