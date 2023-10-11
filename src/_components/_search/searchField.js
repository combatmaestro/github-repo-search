import React from 'react';

const SearchField = ({ query, onChange, onSearch }) => {
  const handleSearch = () => {
    onSearch();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a GitHub repo name"
        value={query}
        onChange={onChange} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchField;
