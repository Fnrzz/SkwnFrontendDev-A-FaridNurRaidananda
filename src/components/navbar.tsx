import { ChevronDown, Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" w-full flex flex-col md:flex-row md:justify-between gap-5 md:gap-0 px-4 py-4 md:px-20 md:py-6 bg-white fixed top-0 shadow-sm md:items-center z-50">
      <div className="flex justify-between">
        <div className="w-20 md:w-30">
          <img
            src="/logo.png"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 `}
      >
        <a href="" className="text-sm">
          About us
        </a>
        <a href="" className="flex gap-1 items-center text-sm">
          Furniture <ChevronDown className="w-4 h-4" />
        </a>
        <a href="" className="text-sm">
          Partnership
        </a>
        <a href="" className="text-sm">
          Contact
        </a>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} md:flex gap-2`}>
        <a
          href=""
          className="px-4 py-2 bg-[#E5F0B6] text-sm rounded-md font-semibold"
        >
          Sign Up
        </a>
        <a href="" className="px-2 py-2 bg-[#553B33] rounded-md">
          <ShoppingBag className="text-[#E5F1B5] w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
