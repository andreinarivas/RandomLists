import React from "react";
import TextArea from "../components/input/TextArea";
import Number from "../components/input/Number";
import Button from "../components/Button";
import Output from "../components/Output";
import Picked from "../sections/Picked";

export default function Picker() {
  return (
    <div className="p-12 py-16 h-fit  bg-decor bg-right bg-cover">
      <div className="bg-white/60 dark:bg-black/60 p-2 rounded-3xl flex flex-col gap-12 w-fit">
        <div className="flex flex-col gap-2">
          <h1 className="font-title font-extrabold text-6xl text-blue ">
            List Picker
          </h1>
          <h4 className="font-body font-bold text-xl">
            Pick as many random elements as you need !
          </h4>
          <h5 className="font-body text-lg">
            Enter all the elements from your list and the amount of winners you
            would like to select, click Pick Winners to get your random elements
          </h5>
          <h5 className="font-bold font-body">
            Enter all elements separated with a space
          </h5>
        </div>
        <div className="flex flex-col md:flex-row px-8  justify-start gap-8 items-center h-fit md:h-96">
          <TextArea />
          <div className="flex flex-col  gap-6 items-start py-10 h-full">
            <Number title="# of Winners" />
            <Button display={"Pick Winners"} />
          </div>
        </div>
        <Picked />
      </div>
    </div>
  );
}
