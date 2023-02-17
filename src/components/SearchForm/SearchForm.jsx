import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  
  const [, setSearchParams] = useSearchParams([]);
  const hendleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ search: query });
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <input type="text" name="search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};
