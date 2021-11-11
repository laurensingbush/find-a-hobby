import React from 'react';
import { useRequest } from '../lib/hooks/useRequest';
import { Prisma } from '@prisma/client';
import HobbyList from './HobbyList';

const categoryWithHobbies = Prisma.validator<Prisma.CategoryArgs>()({
    include: { hobbies: true }
});
type CategoryWithHobbies = Prisma.CategoryGetPayload<typeof categoryWithHobbies>

type Props = {
    searchValue: string;
    categoryValue: string;
};

const CategoryList: React.FC<Props> = ({ categoryValue, searchValue }) => {
    const { data, isValidating, error} = useRequest<CategoryWithHobbies[]>(`/api/hobbies?category=${categoryValue}&search=${searchValue}`)
    
    return (
        <div className='categorylist-container'>
            {isValidating ? (
                <div className='loading'></div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                data?.map((category) => (
                    category.hobbies.length === 0 ? null : (
                        <div className='category' key={category.id}>
                            {!category.type ? (
                                <h2>{category.name}</h2>
                            ) : (
                                <div className='category-with-type'>
                                    <h2>{category.type}</h2>
                                    <h3>{category.name}</h3>
                                </div>
                            )}
                            <HobbyList hobbies={category.hobbies} />
                        </div>
                    )
                ))
            )}
        </div>
    );
};

export default CategoryList;