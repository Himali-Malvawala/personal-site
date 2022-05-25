import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const showBarHandler = () => {
    setIsClicked(true);
  };

  const closeModal = () => {
    setIsClicked(false);
  };

  return (
    <div>
      <nav className="w-full bg-yellow shadow">
        <div className="container m-auto flex justify-between items-center">
          <Link href="/">
            <a className="font-mono text-2xl md:text-3xl font-semibold hover:text-blue cursor-pointer my-8 mx-9 md:ml-14">
              Himali Malvawala
            </a>
          </Link>
          <ul className="text-lg font-light hidden md:flex items-center my-8 mx-14">
            <li>
              <Link href="/about">
                <a className="hover:text-white mr-10 cursor-pointer">ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className=" hover:text-white mr-10 cursor-pointer">BLOG</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className=" hover:text-white cursor-pointer">CONTACT</a>
              </Link>
            </li>
          </ul>
          <button
            onClick={showBarHandler}
            className="block md:hidden py-3 px-4 mx-4 rounded focus:outline-none hover:bg-black "
          >
            <div className="w-5 h-1 bg-blue mb-1"></div>
            <div className="w-5 h-1 bg-blue mb-1"></div>
            <div className="w-5 h-1 bg-blue"></div>
            {isClicked ? (
              <div className="absolute right-20 top-0 h-48 w-6/12 bg-white  transition-all duration-300 border-double border-blue border-2 rounded-md shadow z-10">
                <ul className="flex flex-col items-center w-full text-lg font-base">
                  <li className="hover:text-blue cursor-pointer mt-8">
                    <Link href="/about">ABOUT</Link>
                  </li>
                  <li className="hover:text-blue cursor-pointer mt-5">
                    <Link href="/blog">BLOG</Link>
                  </li>
                  <li className="hover:text-blue cursor-pointer mt-5">
                    <Link href="/contact">CONTACT</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div onClick={closeModal}></div>
            )}
          </button>
        </div>
      </nav>
      <div onClick={closeModal}></div>
    </div>
  );
};

export default Navigation;
