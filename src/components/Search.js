import React from "react";

function Search({ search, handleSearch }) {
  return (
    <div className="searchbar">
      <label className="searchBar" htmlFor="search">Search for an expense by name or category:</label>
      <input
        type="text"
        id="search"
        value={search}
        name="search"
        placeholder="Start typing..."
        onChange={(e) => (handleSearch(e.target.value))}
      />
    </div>
  );
}

export default Search;