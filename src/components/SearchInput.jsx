import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const searchTypes = ["title", "content", "nickname", "hashtag"];

export default function SearchInput() {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState(searchTypes[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/articles?${searchType}=${encodeURIComponent(searchTerm)}`, {
      search: {
        [searchType]: searchTerm,
      },
    });
  };

  return (
    <div>
      <form
        className="flex items-center rounded-md shadow-sm"
        onSubmit={handleSubmit}
      >
        <select
          name="searchType"
          value={searchType}
          onChange={handleTypeChange}
          className="block capitalize font-bold w-6/12 px-3 py-1.5 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {searchTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <input
          id="search"
          type="text"
          name={searchTerm}
          value={searchTerm}
          onChange={handleTermChange}
          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-28 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />

        <button className="py-2 px-3 ml-2 rounded-md hover:brightness-125 bg-indigo-600 text-white first-letter:uppercase font-semibold">
          <ImSearch />
        </button>
      </form>
    </div>
  );
}
