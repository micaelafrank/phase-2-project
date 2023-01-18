import React from "react";

function Search({ search, handleSearch }) {
  return (
    <div className="searchbar">
      <label className="searchBar" htmlFor="search">SEARCH EXPENSES BY NAME OR CATEGORY:</label>
      <input
        type="text"
        id="search"
        value={search}
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
        name="search"
        placeholder="Start typing... (Ex: food, Trader Joe's, rent)"
        onChange={(e) => (handleSearch(e.target.value))}
      />
    </div>
  );
}

export default Search;