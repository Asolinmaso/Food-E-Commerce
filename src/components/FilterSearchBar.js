// src/components/FilterSearchBar.js
import { useState } from 'react';
import CartIcon from './CartIcon';

const FilterSearchBar = ({ filterItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterItems(e.target.value);
  };

  return (
    <div className="flex justify-between items-center mb-6 bg-gray-100 p-4 rounded shadow-md">
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex-grow p-3 border rounded-lg"
      />
      <div className="ml-4">
        <CartIcon />
      </div>
    </div>
  );
};

export default FilterSearchBar;
