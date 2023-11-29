import React from "react";

export default function Number({ title, number, setNumber }) {
  return (
    <div className=" relative border-4 border-blue rounded-3xl p-4 w-full  h-fit">
      <h5 className="absolute font-title text-blue text-lg font-bold bg-white dark:bg-black rounded-3xl -top-4 left-6 px-8 ">
        {title}
      </h5>
      <input
        type="number"
        min="1"
        className="bg-transparent font-body font-bold outline-none text-center w-full"
        onChange={(e) => {
          if (number < 1) {
            setNumber(1);
          } else {
            setNumber(e.target.value);
          }
        }}
        value={number}
      />
    </div>
  );
}
