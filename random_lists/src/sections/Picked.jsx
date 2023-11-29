import React from "react";
import Output from "../components/Output";
import Button from "../components/Button";

export default function Picked() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-title font-extrabold text-4xl">Results</h2>
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col gap-6">
          <Output display={"Winner #1"} />
          <Output display={"Winner #2"} />
          <Output display={"Winner #3"} />
        </div>

        <Button display={"Copy Results"} />
      </div>
    </div>
  );
}
