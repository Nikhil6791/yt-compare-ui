import React from "react";
import SearchIcon from "@iconify-react/material-symbols/search";

const SearchInput = ({ value, onChange, ref, onClick, label, placeholder }) => {
  return (
    <div className="input-group flex gap-2 flex-col ">
      <label>{label}</label>
      <div className="relative flex justify-between items-center ">
        <input
          onChange={(e) => onChange(e.target.value)}
          className="px-[10vw] py-4 outline-none border border-gray-300 rounded-xl active:borderborder-blue-400"
          type="text"
          placeholder={placeholder}
          value={value}
        />

        <SearchIcon
          className="absolute"
          height="24"
          style={{
            position: "absolute",
            left: "7px",
          }}
        />
        <button
          ref={ref}
          type="button"
          onClick={(e) => onClick(e)}
          className="dark:bg-blue-600 bg-blue-500 absolute cursor-pointer px-6 py-2 right-2 rounded-2xl text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
