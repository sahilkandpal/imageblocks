import React, { useState, useContext } from "react";
import { queryContext } from "../context/queryContext";
const SearchBar = () => {
  const [value, setValue] = useState("");

  const { setQuery } = useContext(queryContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setQuery(value);
    }
  };
  return (
    <form className="w-100" onSubmit={onSubmit}>
      <div className="searchbar mx-auto">
        <button type="submit" className="fa fa-search"></button>
        <input
          type="text"
          name="query"
          placeholder="Search images"
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
