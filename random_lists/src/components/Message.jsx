import React from "react";

export default function Message({ display }) {
  return (
    <div className="flex items-center w-full px-12 py-2 bg-blue/20 rounded-full font-body font-bold text-blue">
      {display}
    </div>
  );
}
