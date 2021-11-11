import React from 'react';

type Props = {
    category: string;
    handleSelect: React.ChangeEventHandler;
};

const DropdownMenu: React.FC<Props> = ({ category, handleSelect }) => {
    return (
        <div className='dropdown-container'>
            <label htmlFor='selectHobby'>
                <span className='visually-hidden'>Select Category</span>
            </label>
            <select value={category} onChange={handleSelect} id='selectHobby'>
                <option value=''>All</option>
                <option value='General hobbies'>General</option>
                <option value='Outdoors and Sports'>Outdoors and Sports</option>
                <option value='Educational hobbies'>Educational</option>
                <option value='Collection hobbies'>Collection</option>
                <option value='Competitive hobbies'>Competitive</option>
                <option value='Observation hobbies'>Observation</option>
            </select>
        </div>
    );
};

export default DropdownMenu;