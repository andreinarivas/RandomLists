import React from "react";
import Select from "../components/input/Select";
import TextArea from "../components/input/TextArea";
import Button from "../components/Button";
import Organized from "../sections/Organized";

export default function Organizer() {
  return (
    <div className="p-10 py-16 h-fit   bg-decor bg-right bg-cover">
      <div className="bg-white/60 dark:bg-black/60 p-2 rounded-3xl flex flex-col gap-12 w-fit">
        <div className="flex flex-col gap-2">
          <h1 className="font-title font-extrabold text-6xl text-blue ">
            List Organizer
          </h1>
          <h4 className="font-body font-bold text-xl">Organize your list !</h4>
          <h5 className="font-body text-lg">
            Enter all the elements of your list and pick by which criteria you
            would like to organize it by. Click Organize to get your fully
            organized list
          </h5>
          <h5 className="font-bold font-body">
            Enter all elements separated with a space
          </h5>
        </div>
        <div className="flex flex-col md:flex-row px-8  justify-start gap-8 items-center h-fit md:h-96">
          <TextArea />
          <div className="flex flex-col  gap-6 items-start py-10 h-full">
            <Select />
            <Button display={"Organize"} />
          </div>
        </div>
        <Organized />
      </div>
    </div>
  );
}
