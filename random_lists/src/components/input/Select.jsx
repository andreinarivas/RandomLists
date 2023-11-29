import React from "react";

export default function Select() {
  return (
    <div className=" relative border-4 border-blue rounded-3xl p-4 w-64 h-fit">
      <h5 className="absolute font-title text-blue text-lg font-bold bg-white dark:bg-black rounded-3xl -top-4 left-6 px-8 ">
        Select an order
      </h5>
      <div className=" flex flex-col gap-2 px-4">
        <div>
          <input
            type="radio"
            value="numeric"
            name="option"
            id="num"
            className="bg-transparent border border-black dark:border-white rounded-full appearance-none checked:bg-blue checked:border-white checked:ring-2 checked:ring-blue checked:ring-opacity-75   h-4 w-4 font-body font-bold outline-none text-center accent-blue hover:bg-blue/50 cursor-pointer transition ease-in delay-0 duration-100"
          />
          <label htmlFor="num" className="mx-4">
            Numeric
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="alphabetic"
            name="option"
            id="alpha"
            className="bg-transparent border border-black rounded-full dark:border-white appearance-none checked:bg-blue checked:border-white checked:ring-2 checked:ring-blue checked:ring-opacity-75   h-4 w-4 font-body font-bold outline-none text-center accent-blue hover:bg-blue/50 cursor-pointer transition ease-in delay-0 duration-100"
          />
          <label htmlFor="alpha" className="mx-4">
            Alphabetic
          </label>
        </div>
      </div>
    </div>
  );
}
