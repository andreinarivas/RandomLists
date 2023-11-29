import React from "react";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import { HOME_URL } from "../constants/URLS";

export default function () {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center h-fit px-12 py-8 bg-blue shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ">
      <Link
        className="font-title font-extrabold text-5xl text-white cursor-pointer"
        to={HOME_URL}
      >
        RandomLists
      </Link>
      <Menu />
    </div>
  );
}
