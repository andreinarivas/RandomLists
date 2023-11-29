import React from "react";
import { Link } from "react-router-dom";

export default function Button({ action, display, main, aux }) {
  if (main) {
    return (
      <button
        className="bg-white font-title text-blue rounded-full py-2 hover:bg-black transition ease-in-out delay-0 duration-200 max-w-lg justify-self-end h-fit px-24 text-center  font-semibold md:text-2xl"
        onClick={action}
      >
        {display}
      </button>
    );
  } else if (aux) {
    return (
      <button
        className="bg-transparent font-title text-blue border-4 border-blue  rounded-full py-1 hover:bg-blue hover:text-white transition ease-in-out delay-0 duration-200 max-w-lg h-fit px-24 text-center font-semibold md:text-xl"
        onClick={action}
      >
        {display}
      </button>
    );
  } else {
    return (
      <button
        className="bg-blue font-title text-white border-4 border-blue rounded-full py-1 hover:bg-transparent hover:text-blue transition ease-in-out delay-0 duration-200 max-w-xl h-fit px-24 text-center font-semibold md:text-xl"
        onClick={action}
      >
        {display}
      </button>
    );
  }
}
