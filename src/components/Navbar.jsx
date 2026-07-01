import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="border-b flex justify-between items-center px-4 border-gray-300 dark:border-gray-700">
      <Link className="text-xl font-bold " to="/">
        yt-compare
      </Link>

      <div className="flex justify-between gap-4 items-center">
        <Link
          className="dark:hover:bg-gray-800 hover:rounded-xl p-2 hover:bg-gray-200"
          to="/compare"
        >
          Compare
        </Link>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
