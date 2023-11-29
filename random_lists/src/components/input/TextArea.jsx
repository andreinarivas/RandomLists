import React from "react";

export default function TextArea({ list, setList }) {
  return (
    <div className=" relative border-4 border-blue rounded-3xl p-4 w-full lg:w-[600px] max-w-xl  h-fit">
      <h5 className="absolute font-title text-blue text-lg font-bold bg-white dark:bg-black rounded-3xl -top-4 left-6 px-8 ">
        Your list
      </h5>
      <textarea
        className="bg-transparent font-body w-full h-64 outline-none resize-none overflow-auto"
        onChange={(e) => {
          setList(e.target.value);
        }}
        value={list}
      />
    </div>
  );
}
