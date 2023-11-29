import React, { useEffect, useState } from "react";
import Output from "../components/Output";
import Button from "../components/Button";
import { copy_sorted } from "../utils/utils";
import Message from "../components/Message";

export default function Sorted({ result }) {
  const [copy, setCopy] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    const res = copy_sorted(result);
    setCopy(res);
  };
  useEffect(() => {
    setCopy(false);
  }, [result]);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-title font-extrabold text-4xl">Results</h2>
      <div className="flex flex-wrap gap-6">
        {result.map((r, i) => {
          return <Output display={`Group ${i + 1}`} value={r} />;
        })}
        <Button display={"Copy Results"} action={handleCopy} />
        {copy ? <Message display={"Copied to clipboard!"} /> : <></>}
      </div>
    </div>
  );
}
