import type { NextApiRequest, NextApiResponse } from 'next';
import { Prisma } from '@prisma/client'
import prisma from '../../lib/prisma';

// GET /api/hobbies?category=:categoryQuery&search=:searchQuery
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const categoryQuery = Array.isArray(req.query.category) ? req.query.category[0] : req.query.category;
    const searchQuery = Array.isArray(req.query.search) ? req.query.search[0] : req.query.search;
    let results;
    try {
        if (categoryQuery && searchQuery) {
            results = await prisma.category.findMany({
                where: {
                    OR: [
                        { type: categoryQuery }, 
                        { name: categoryQuery }
                    ]
                },
                include: {
                    hobbies: {
                        where: {
                            title: { 
                                startsWith: searchQuery, 
                                mode: 'insensitive' 
                            }
                        }
                    }
                }
            })
        } else if (searchQuery) {
            results = await prisma.category.findMany({
                include: {
                    hobbies: {
                        where: {
                            title: { 
                                startsWith: searchQuery, 
                                mode: 'insensitive' 
                            }
                        }
                    }
                }
            })
        } else if (categoryQuery) {
            results = await prisma.category.findMany({
            where: {
                    OR: [
                        { type: categoryQuery }, 
                        { name: categoryQuery }
                    ]  
                },
                include: {
                    hobbies: true
                }
            })
        } else {
            results = await prisma.category.findMany({
                include: {
                    hobbies: true
                }
            })
        }
        res.status(200).json(results);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError || error instanceof Prisma.PrismaClientUnknownRequestError) {
            console.error(error.message);
        };
        res.status(500).json({error: 'Internal server error.'})
    };
};