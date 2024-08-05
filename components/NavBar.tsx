"use client"
import React, { useState } from "react";
import { FaBell, FaCaretDown } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { TiMessageTyping } from "react-icons/ti";
import Image from "next/image";
import { TbCalendarClock } from "react-icons/tb";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar bg-transparent">
      <nav className="text-gray-500 bg-transparent h-[64px] p-4 flex justify-between items-center">
        <div className="relative ml-9">
          <button
            className="flex text-blue-800 p-2 px-3 rounded-xl shadow-lg bg-gray-200 items-center "
            onClick={toggleDropdown}
          >
            Courses <FaCaretDown className="ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul className="py-1 capitalize">
                <li className="px-4 py-2 hover:bg-gray-100">front end</li>
                <li className="px-4 py-2 hover:bg-gray-100">backend</li>
                <li className="px-4 py-2 hover:bg-gray-100">data analysis</li>
              </ul>
            </div>
          )}
        </div>
        <ul className="flex flex-row-reverse items-center gap-x-9">
          <li>
            <Image
              className="rounded-full"
              alt="user"
              width={30}
              height={30}
              src="/images/profile.jpeg"
            />
          </li>
          <li>
            <FaBell />
          </li>
          <li>
            <TiMessageTyping />
          </li>
          <li>
            <TbCalendarClock />
          </li>
          <li>
            <BsSearch />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
