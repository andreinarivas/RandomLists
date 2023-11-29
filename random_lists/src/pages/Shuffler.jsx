import React from "react";
import TextArea from "../components/input/TextArea";
import Number from "../components/input/Number";
import Button from "../components/Button";
import Output from "../components/Output";
import Shuffled from "../sections/Shuffled";

export default function Shuffler() {
  return (
    <div className="p-12 py-16 h-fit  bg-decor bg-right bg-cover">
      <div className="bg-white/60 dark:bg-black/60 p-2 rounded-3xl flex flex-col gap-12 w-fit">
        <div className="flex flex-col gap-2">
          <h1 className="font-title font-extrabold text-6xl text-blue ">
            List Shuffler
          </h1>
          <h4 className="font-body font-bold text-xl">
            Randomize your list elements !
          </h4>
          <h5 className="font-body text-lg">
            Enter all the elements from your list and click shuffle to generate
            a new randomly shuffled order
          </h5>
        </div>
        <div className="flex flex-col px-8  justify-start gap-8 items-start h-fit md:h-96">
          <h5 className="font-bold font-body">
            Enter all elements separated with a space
          </h5>
          <TextArea />
          <Button display={"Shuffle"} />
        </div>
        <Shuffled />
      </div>
    </div>
  );
}
