import React, { useEffect, useState } from "react";
import TextArea from "../components/input/TextArea";
import Number from "../components/input/Number";
import Button from "../components/Button";
import Output from "../components/Output";
import Sorted from "../sections/Sorted";
import { list_sorter } from "../utils/utils";
import Message from "../components/Message";

export default function Sorter() {
  const [list, setList] = useState("");
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState();
  const [sorted, setSorted] = useState(false);
  const [error, setError] = useState(false);

  const handleSorting = (e) => {
    setError(false);
    if (list != "" && number != 0) {
      setSorted(false);
      console.log(list);
      e.preventDefault();
      const res = list_sorter(list, number);
      setResult(res);
      setSorted(true);
    } else {
      setError(true);
    }
  };

  const handleClear = (e) => {
    setError(false);
    setSorted(false);
    setList("");
    setNumber("");
    setResult();
  };

  return (
    <div className="p-12 py-16 h-fit bg-decor bg-right bg-cover">
      <div className="bg-white/60 dark:bg-black/60 p-2 rounded-3xl flex flex-col gap-12 w-fit">
        <div className="flex flex-col gap-2">
          <h1 className="font-title font-extrabold text-6xl text-blue ">
            List Sorter
          </h1>
          <h4 className="font-body font-bold text-xl">
            Sort a list in as many random groups as you need !
          </h4>
          <h5 className="font-body text-lg">
            Enter all the elements to sort and the amount of groups you would
            prefer and click sort
          </h5>
          <h5 className="font-bold font-body">
            Enter all elements separated with a space
          </h5>
        </div>
        <div className="flex flex-col md:flex-row px-8  justify-start gap-8 items-center h-fit md:h-96">
          <TextArea list={list} setList={setList} />
          <div className="flex flex-col  gap-6 items-start py-10 h-full">
            <Number title="# of Groups" number={number} setNumber={setNumber} />
            <Button display={"Generate"} action={handleSorting} />
            {sorted ? (
              <Button display={"Clear"} aux action={handleClear} />
            ) : (
              <></>
            )}
            {error ? (
              <Message display={"Please enter all the information"} />
            ) : (
              <></>
            )}
          </div>
        </div>
        {sorted && result ? <Sorted result={result} /> : <></>}
      </div>
    </div>
  );
}
