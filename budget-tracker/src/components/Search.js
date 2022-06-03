import React from "react";
import { useState, useEffect } from "react";

function Search({ search, handleSearch, expenses }) {
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