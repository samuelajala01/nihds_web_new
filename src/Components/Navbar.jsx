"use client";

import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center absolute mt-8">
      <div className="flex justify-center items-center gap-[4vw] py-6 px-8 bg-white w-fit rounded-full relative">
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <div>
          <Image alt="Logo" className="" width={120} height={120} src={Logo} />
        </div>

        {/* Navigation Links */}
        <ul
          className={`
          flex-col md:flex-row
          ${
            isMenuOpen
              ? "flex absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-lg"
              : "hidden md:flex"
          }
          gap-[3vw] items-center
        `}
        >
          <li>Home</li>
          <li>About</li>
          <li>Community</li>
          <li>Events</li>
          <li>Reources</li>
          <li>Contact</li>
        </ul>

        {/* Join Now Button */}
        <button className="bg-[#03045E] text-white rounded-full py-2 px-6">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
