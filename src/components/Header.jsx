import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header({ handleTheme, darkTheme }) {
  const [hamburger, setHamburger] = useState(false);
  function handleHamburger() {
    setHamburger(!hamburger);
  }
  useEffect(() => {
    function handleScroll() {
      setHamburger(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="z-50 top-0 shadow backdrop-blur-md fixed w-full h-20 ">
      <div className="mx-auto flex h-full max-w-4xl items-center relative justify-between px-6">
        <h1 className="sm:text-2xl  text-xl">Ahmet Furkan Meriç</h1>
        <div className="flex gap-8">
          <button
            className="sm:hidden hover:bg-zinc-400 hover:bg-opacity-30 rounded-full float-left px-2"
            onClick={handleHamburger}
          >
            {hamburger ? <CloseIcon /> : <MenuIcon />}
          </button>
          <ul
            className={`items-center sm:gap-4  sm:static absolute z-50 transition-all 
           ${
             hamburger &&
             " w-full h-full  sm:border-none translate-x-1/2 right-2/4"
           }  top-20 ${!hamburger && "-right-2/4 "} flex flex-col sm:flex-row`}
          >
            <li
              className={`transition-opacity bg-blend-color-burn ${
                hamburger &&
                "w-full bg-zinc-500 shadow bg-opacity-30 transition-all hover:bg-opacity-50 text-center "
              }`}
            >
              <a
                className="w-full h-12 flex items-center justify-center"
                href="#home"
              >
                Home
              </a>
            </li>
            <li
              className={` transition-opacity ${
                hamburger &&
                "w-full bg-zinc-500 shadow bg-opacity-30 transition-all hover:bg-opacity-50 text-center"
              }`}
            >
              <a
                className="w-full h-12 flex items-center justify-center"
                href="#projects"
              >
                Project
              </a>
            </li>
          </ul>
          <button
            className="p-2 hover:opacity-50 transition-opacity"
            onClick={handleTheme}
          >
            {darkTheme ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}
//dark:bg-zinc-800 dark:bg-opacity-90 bg-white bg-opacity-70
export default Header;
