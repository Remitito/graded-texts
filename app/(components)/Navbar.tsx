import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const LinkStyle = `${poppins.className} hover:text-red-600`;

  return (
    <nav className="w-screen h-24 flex flex-row justify-between">
      <Link className="w-1/5 flex items-center h-full" href="/">
        <img src="/icons/logoEdit.png" alt="Logo" className=" ml-8 h-4/5" />
      </Link>
      <div className="w-2/5 h-full flex flex-row justify-evenly items-center">
        <Link className={LinkStyle} href="login">
          Login
        </Link>
        <Link className={LinkStyle} href="search">
          Search
        </Link>
        <Link className={LinkStyle} href="about">
          About
        </Link>
        <Link className={LinkStyle} href="contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
