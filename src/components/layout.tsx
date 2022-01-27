import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="flex sticky bg-white w-[100%] top-0  flex-row justify-center ">
        <li className="list-none text-[2vw] px-4">
          <Link to={"/dashboard"}>Dashboard </Link>
        </li>
        <li className="list-none text-[2vw] px-4">
          <Link to={"/products"}>Products </Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}
