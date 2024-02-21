import React, { useState } from 'react';

const useSearch = (data) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const getColumnsFromData = () => {
    if (data.length === 0) {
      return [];
    }
    return Object.keys(data[0]);
  };

  const columns = getColumnsFromData();

  const search = (searchQuery) => {
    const regex = new RegExp(searchQuery, 'i');
    const filteredResults = data.filter((item) => {
      return columns.some((column) => {
        return regex.test(item[column]);
      });
    });

    setQuery(searchQuery);
    setFilteredData(filteredResults);
  };

  return {
    query,
    setQuery,
    filteredData,
    search,
  };
};

export default useSearch;
