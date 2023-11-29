import React from "react";
import { Link } from "react-router-dom";

export default function Linker({ path }) {
  return (
    <Link
      to={path}
      className="text-blue bg-white px-6 py-1 rounded-full font-title font-extrabold border-4 border-white hover:bg-blue hover:text-white transition ease-in-out delay-0 duration-200"
    >
      try out!
    </Link>
  );
}
