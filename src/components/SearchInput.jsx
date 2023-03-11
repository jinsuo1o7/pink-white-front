import React from "react";
import { ImSearch } from "react-icons/im";

export default function SearchInput() {
  return (
    <div>
      <form className="flex rounded-md shadow-sm">
        <input
          type="text"
          name={"search"}
          id="search"
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
