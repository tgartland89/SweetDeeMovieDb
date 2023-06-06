import React, { useState } from 'react';

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const query = event.target.value;
    setQuery(query);
    onSearch(query); // Call the onSearch function whenever the input value changes
  };
  
  <input type="text" value={query} onChange={handleInputChange} />
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}
