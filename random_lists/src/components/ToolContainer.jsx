import React from "react";
import Linker from "./Linker";

export default function ToolContainer({ title, description, path }) {
  return (
    <div className="rounded-3xl border-4 border-blue overflow-hidden h-fit md:w-80 lg:w-[420px]">
      <div className="bg-blue border-2 border-blue py-4 px-8 flex flex-row justify-around items-center">
        <h1 className="font-title font-bold text-white text-2xl h-fit">
          {title}
        </h1>
        <Linker path={path} />
      </div>
      <div className="px-8 py-4">
        <p className="font-body">{description}</p>
      </div>
    </div>
  );
}
