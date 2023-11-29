import React from "react";

const prueba = "hola <br> como estas"

export default function Output({ display, value }) {
  return (
    <div className=" relative border-4 border-blue rounded-3xl p-4 w-full lg:w-[600px] max-w-xl  h-fit">
      <h5 className="absolute font-title text-blue text-lg font-bold bg-white dark:bg-black rounded-3xl -top-4 left-6 px-8 ">
        {display}
      </h5>
      <div className="my-4 bg-transparent font-body w-full outline-none resize-none h-fit">
        {value}
      </div>
    </div>
  );
}
