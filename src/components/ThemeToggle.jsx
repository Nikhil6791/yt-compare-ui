import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="flex justify-end items-center px-6 py-3">
      <button
        className=" flex justify-center items-center border border-gray-500 font-semibold cursor-pointer rounded-full w-10 h-10"
        onClick={() => setDark(!dark)}
      >
        {dark ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
