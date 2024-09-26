'use client';  // Add this line
import React, { useState } from 'react';
import styles from './SearchBar.module.css';  // Import the CSS module

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search Term:', searchTerm);
    // Implement search logic here
  };

  return (
    <form className={styles['search-bar']} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for services or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles['search-input']}
      />
      <button type="submit" className={styles['search-btn']}>Search</button>
    </form>
  );
};

export default SearchBar;
