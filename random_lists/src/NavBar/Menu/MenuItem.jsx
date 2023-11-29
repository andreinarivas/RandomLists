import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ display, path }) {
  return (
    <Link
      to={path}
      className="px-4 py-1 rounded-3xl w-fit h-fit hover:bg-white text-white hover:text-blue transition ease-in-out delay-0 duration-200 cursor-pointer flex content-center justify-center
    "
    >
      <h6 className="font-body text-center lg:text-lg h-fit">{display}</h6>
    </Link>
  );
}
