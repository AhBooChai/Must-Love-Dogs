"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchBreed from "./SearchBreed";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const [breed, setBreed] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (breed === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(breed.toLowerCase());
  };

  const updateSearchParams = (breed: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (breed) {
      searchParams.set("breed", breed);
    } else {
      searchParams.delete("breed");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBreed breed={breed} setBreed={setBreed} />
        <SearchButton otherClasses="sm-hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
