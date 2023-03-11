import React from "react";
import { Link } from "react-router-dom";
import { BiCube } from "react-icons/bi";
import SearchInput from "../components/SearchInput";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-3 border-b-2">
      <Link to={"/"} className="flex items-center">
        <BiCube className="ml-4 text-3xl" />
        <p className="text-lg ml-1 font-semibold">PinkWhite</p>
      </Link>

      <nav className="flex items-center gap-4 ml-20">
        <Link to={"/articles?page=0"}>Articles</Link>
      </nav>

      <div className="flex flex-grow justify-center">
        <SearchInput />
      </div>

      <nav className="flex items-center gap-4 font-semibold text-base">
        <Link to={"/"} className="flex items-center">
          <p>Join</p>
        </Link>
        <Link to={"/"} className="flex items-center">
          <p>Signin</p>
        </Link>
      </nav>
    </header>
  );
}
