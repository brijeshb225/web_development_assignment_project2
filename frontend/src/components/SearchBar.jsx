import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => onSearch(query);
  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Search equipment..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "6px", width: "250px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "8px" }}>Search</button>
      <button onClick={handleClear} style={{ marginLeft: "8px" }}>Clear</button>
    </div>
  );
}

export default SearchBar;
