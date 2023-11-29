import React from "react";
import MenuItem from "./MenuItem";
import { ORG_URL, PICK_URL, SHUFFLE_URL, SORT_URL } from "../../constants/URLS";

export default function Menu() {
  return (
    <div className="flex flex-wrap flex-row gap-4 h-fit">
      <MenuItem display={"Sorter"} path={SORT_URL} />
      <MenuItem display={"Shuffler"} path={SHUFFLE_URL} />
      <MenuItem display={"Picker"} path={PICK_URL} />
      <MenuItem display={"Organizer"} path={ORG_URL} />
    </div>
  );
}
