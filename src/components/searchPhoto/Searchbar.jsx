import React from 'react';
import { useState } from 'react';
import '../../App.css';

function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const form = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={form}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          value={search}
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
