import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "../styles/Header.module.css";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header className="fixed top-0 w-full  z-30  transition-all pt-4 bg-slate-700">
        <nav className=" mx-auto grid grid-flow-col py-2 px-14">
          <Link href="/">
            <div className={css.logo}>
              <span>Toko Laku</span>
            </div>
          </Link>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className={css.navright}>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
              >
                Profile
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Logout
              </button>
            </div>
            {/* <ButtonOutline>Sign Up</ButtonOutline> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
