import React from 'react';
import { CategoryWithHobbies } from '../pages';
import HobbyList from './HobbyList';

type Props = {
    categories: CategoryWithHobbies[];
};

const CategoryList: React.FC<Props> = ({ categories }) => {
    return (
        <div className='categorylist-container'>
            {categories?.map((category) => (
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
            ))}
        </div>
    );
};

export default CategoryList;