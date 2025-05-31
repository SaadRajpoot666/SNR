import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="navbars-container">
        {/* {Laptop Navbar} */}

        <div className="laptop-nav hidden md:block">
          <nav className="relative bg-white ">
            <ul className="flex flex-row gap-6 pt-3 pb-3 font-extrabold font-sans justify-center text-2xl text-purple-700    ">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-purple-900 duration-150 cursor-pointer "
                >
                  {" "}
                  <Link to={item.toLowerCase()}>{item}</Link>{" "}
                </li>
              ))}
            </ul>
            <div className=" absoulte h-[2px] bg-gradient-to-r from-white  via-purple-800 to-white bottom-0 left-0 w-full "></div>
          </nav>
        </div>

        {/* mobile navbar */}
        <div className="mobile-nav block md:hidden">
          <nav className="py-4 px-4 relative">
            <div
              className="hamburger-container text-purple-700 mb-7 text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </div>
                <div className={`transition-all duration-500 overflow-hidden ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} transform`}>

            <ul className={`${isOpen ?   "block" : "hidden"} flex  justify-center flex-col text-2xl text-purple-700 font-extrabold  gap-3 font-sans`}>
              {navItems.map((item, index) => (
                  <li
                  key={index}
                  className="hover:text-purple-900 duration-150 cursor-pointer "
                  >
                  {" "}
                  <Link to={item.toLowerCase()}>{item}</Link>{" "}
                </li>
              ))}
            </ul>
              </div>
              <div className="absolute h-[2px] w-full bottom-0 left-0 bg-gradient-to-r from-white via-purple-800 to-white  "></div>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};
