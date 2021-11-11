import { Prisma } from '.prisma/client';
import prisma from '../lib/prisma';
import categories from './data/categories.json';
import hobbies from './data/hobbies.json';

async function main() {
    for (const category of categories) {
        const categoryCreate: Prisma.CategoryCreateInput = {
            id: category.id,
            name: category.name,
            type: category.type
        };
        await prisma.category.create({data: categoryCreate});
    };
  
    for (const hobby of hobbies) {
        const hobbyCreate: Prisma.HobbyCreateInput = {
            id: hobby.id,
            title: hobby.title,
            urlTitle: hobby.urlTitle,
            summary: hobby.summary,
            history: hobby.history,
            imageUrl: hobby.imageUrl,
            category: { connect: { id: hobby.categoryId }}
        };
        await prisma.hobby.create({data: hobbyCreate});
    };
};

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
