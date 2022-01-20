import React from 'react';
import { CategoryWithHobbies } from '../pages';
import HobbyList from './HobbyList';

type Props = {
    categories: CategoryWithHobbies[];
};

const capitalize = (title: string): string => {
    return title
            .toLowerCase()
            .split(' ')
            .map((word) => word == 'and' ? word : word.charAt(0).toUpperCase() + word.substring(1))
            .join(' ');
};

const CategoryList: React.FC<Props> = ({ categories }) => {
    return (
        <div className='categorylist-container'>
            {categories?.map((category) => (
                category.hobbies.length === 0 ? null : (
                    <div className='category' key={category.id}>
                        {!category.type ? (
                            <h2>{capitalize(category.name)}</h2>
                        ) : (
                            <div className='category-with-type'>
                                <h2>{capitalize(category.name)}</h2>
                                <h3>{category.type}</h3>
                            </div>
                        )}
                        <HobbyList hobbies={category.hobbies} />
                    </div>
                )
            ))}
        </div>
    );
};

export default CategoryList;