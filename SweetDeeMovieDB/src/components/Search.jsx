// represents a search bar. It allows users to enter a search query and submit it to perform a search.
// provides a search bar. It maintains the current query state using the useState hook, 
// and it calls the onSearch function provided as a prop whenever the query changes or when the form is submitted.

import React, { useState } from 'react';

export default function Search({ onSearch }) {
//  declares a state variable called query using the useState hook. 
// The initial value of query is an empty string, and the setQuery function is used to update the value of query
 
  const [query, setQuery] = useState('');

  // the handleInputChange is triggered when the input field's value changes. It extracts the new query from the event target's value, 
  // updates the query state with the new value, and calls the onSearch function, passing the new query as an argument.
  
  const handleInputChange = (event) => {
    const query = event.target.value;
    setQuery(query);
    onSearch(query); 
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