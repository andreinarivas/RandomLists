import React from "react";
import Button from "../components/Button";
import ToolContainer from "../components/ToolContainer";
import { ORG_URL, PICK_URL, SHUFFLE_URL, SORT_URL } from "../constants/URLS";

export default function Landing() {
  const handleScroll = () => {
    const element = document.getElementById("our_tools");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="bg-main dark:bg-main_dark bg-cover bg-center h-[600px] md:h-[650px] grid auto-rows-fr place-content-center p-8">
        <div className="flex flex-col gap-5 justify-center md:flex-row md:items-center md:justify-around">
          <h1 className="font-title text-center font-extrabold text-white text-7xl max-w-[50%] h-fit md:text-8xl">
            Welcome to RandomLists
          </h1>
          <Button action={handleScroll} display={"Get Started"} main />
        </div>
        <div className="flex items-end">
          <p className="font-body font-semibold text-white h-fit dark:text-black  my-8 mx-4 md:text-xl">
            Randomlists offers a series of different tools manipulate your lists
            randomly, depending on whatever needs you have
          </p>
        </div>
      </div>
      <div className="pt-16 p-8 flex flex-col gap-5" id="our_tools">
        <h1 className="font-title font-bold text-6xl p-4">Our tools</h1>
        <h4 className="font-body font-bold text-lg p-4">
          Discover all our available tools! Each gives you different ways to
          randomly interact with your list, whatever you may need.
        </h4>
        <div className="flex flex-col gap-8 md:flex-row flex-wrap lg:mx-14 xl:mx-24 items-center justify-center">
          <ToolContainer
            title="List Sorter"
            description="The List Sorter allows you to randomly distribute elements of a list into as many groups as you need"
            path={SORT_URL}
          />
          <ToolContainer
            title="List Shuffler"
            description="The List Shuffler will randomly mix up your list, giving you a completely random new order for your list items"
            path={SHUFFLE_URL}
          />
          <ToolContainer
            title="List Picker"
            description="The List Picker will select as many random elements from your list you need. It's perfect to pick a winner among the elements in your list, picking as many winners as you please!"
            path={PICK_URL}
          />
          <ToolContainer
            title="List Organizer"
            description="The List Organizer allows you to organize the elements on your list following whatever criteria you select from our options, ranging from numeric to alphabetic"
            path={ORG_URL}
          />
        </div>
      </div>
    </>
  );
}
