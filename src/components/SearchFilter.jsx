// src/components/SearchFilter.jsx
import React, { useState } from 'react';
import { useSpreadsheetStore } from '../state/useSpreadsheetStore';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const { searchGrid } = useSpreadsheetStore();

  const handleSearch = () => {
    const results = searchGrid(query);
    console.log('Search Results:', results);
  };

  return (
    <div className="mb-4">
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
