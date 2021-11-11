import React from 'react';
import { BsXCircle } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import DropdownMenu from './DropdownMenu';

type Props = {
    searchValue: string;
    setSearchValue: Function;
    category: string;
    setCategory: Function;
};

const SearchBar: React.FC<Props> = ({ searchValue, setSearchValue, category, setCategory }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };
    const clearInput = () => {
        setSearchValue('');
    };

    return (
        <div className='searchbar-container'>
            <div className='search-box'>
                <DropdownMenu category={category} handleSelect={handleSelect} />
                <form onSubmit={handleSubmit} aria-label='search-form'>
                    <label htmlFor='search-input'>
                        <span className='visually-hidden'>Search Hobbies</span>
                    </label>
                    <div className='input-container'>
                        <GoSearch className='search-icon' />
                        <input 
                            type='text'
                            aria-label='search input'
                            id='search-input'
                            className='search-input'
                            value={searchValue}
                            onChange={handleChange}
                            placeholder='Search'
                            autoComplete='off'
                        />
                        {searchValue.length !== 0 && (
                            <button onClick={clearInput} className='clear-btn' aria-label='clear input'>
                                <BsXCircle className='clear-icon' />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;