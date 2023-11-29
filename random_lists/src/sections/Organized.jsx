import React from "react";
import Output from "../components/Output";
import Button from "../components/Button";

export default function Organized() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-title font-extrabold text-4xl">Results</h2>
      <div className="flex flex-wrap gap-6">
        <Output display={"Organized List"} />
        <Button display={"Copy Result"} />
      </div>
    </div>
  );
}
