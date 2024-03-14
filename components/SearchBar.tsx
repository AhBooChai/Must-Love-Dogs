"use client";

import { useState } from "react";

import SearchBreed from "./SearchBreed";

const SearchBar = () => {
  const [breed, setBreed] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBreed breed={breed} setBreed={setBreed} />
      </div>
    </form>
  );
};

export default SearchBar;
