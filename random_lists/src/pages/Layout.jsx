import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main>
        <NavBar />
        <section className="bg-white text-black dark:bg-black dark:text-white">
          <Outlet />
        </section>
      </main>
    </>
  );
}
