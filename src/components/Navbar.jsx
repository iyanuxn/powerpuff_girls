import CN from "../assets/cn.svg";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="absolute inset-0 h-max px-16 py-16 navbar flex justify-between items-center">
      <img src={CN} alt="CN" className="w-16 h-16" />
      <div className="flex justify-between items-center text-white text-lg gap-14">
        <a
          href="#"
          className="nav-link hover:scale-110 transition duration-300 ease-in-out"
        >
          Games
        </a>
        <a
          href="#"
          className="nav-link hover:scale-110 transition duration-300 ease-in-out"
        >
          Videos
        </a>
        <a
          href="#"
          className="nav-link hover:scale-110 transition duration-300 ease-in-out"
        >
          App
        </a>
        <a
          href="#"
          className="nav-link hover:scale-110 transition duration-300 ease-in-out"
        >
          Toon Cup
        </a>
        <a href="">
          {" "}
          <FaRegUser className="text-xl nav-link hover:scale-110 transition duration-300 ease-in-out" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
