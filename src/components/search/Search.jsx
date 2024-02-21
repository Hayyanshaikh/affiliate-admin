import React, { useState } from 'react';

const Search = ({ variant, label, icon, onChange }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };

  return (
    <div className={`field ${variant}`}>
      {label && <label className="field_label">{label}</label>}
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Enter search text..."
      />
      {icon && icon}
    </div>
  );
};

export default Search;
