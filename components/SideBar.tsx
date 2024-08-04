import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";
function SideBar() {
  return (
    <div className="sidebar  ">
      <nav className=" w-[56px] h-screen bg-sidebarBlue text-white p-4">
        <ul className="mt-3">
          <li className="mb-4"></li>
          <li className="mb-4"><MdHome /></li>
          <li className="mb-4"></li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
