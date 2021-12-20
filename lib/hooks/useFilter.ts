import { useState, useEffect } from 'react';
import { CategoryWithHobbies } from '../../pages';

export const useFilter = (category: string, searchValue: string, categories: CategoryWithHobbies[]) => {
    const [filteredData, setFilteredData] = useState<CategoryWithHobbies[]>([]);

    useEffect(() => {
        let categoryList: CategoryWithHobbies[] = JSON.parse(JSON.stringify(categories));

        const filterByCategory = (arr: CategoryWithHobbies[]) => {
            return arr.filter((item) => item.type === category || item.name === category);
        };

        const filterBySearchValue = (arr: CategoryWithHobbies[]) => {
            const filteredHobbies = arr.map((item) => {
                return {...item, hobbies: item.hobbies.filter((hobby) => hobby.title.toLowerCase().startsWith(searchValue.toLowerCase()))}
            });
            return filteredHobbies.filter((item) => item.hobbies.length !== 0);
        };

        if (searchValue && category) {
            categoryList = filterBySearchValue(categoryList);
            categoryList = filterByCategory(categoryList);
            setFilteredData(categoryList);
        } else if (searchValue) {
            categoryList = filterBySearchValue(categoryList);
            setFilteredData(categoryList);
        } else if (category) {
            categoryList = filterByCategory(categoryList);
            setFilteredData(categoryList);
        } else setFilteredData(categoryList);

    }, [searchValue, category, categories]);

    return [filteredData] as const;
};