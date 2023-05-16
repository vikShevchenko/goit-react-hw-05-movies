import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams([]);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ search: query });
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="What movie are you looking for"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
