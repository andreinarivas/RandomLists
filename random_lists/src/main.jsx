import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Landing from "./pages/Landing";
import {
  HOME_URL,
  ORG_URL,
  PICK_URL,
  SHUFFLE_URL,
  SORT_URL,
} from "./constants/URLS";
import Sorter from "./pages/Sorter";
import Shuffler from "./pages/Shuffler";
import Picker from "./pages/Picker";
import Organizer from "./pages/Organizer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<Landing />} />
          <Route path={SORT_URL} element={<Sorter />} />
          <Route path={SHUFFLE_URL} element={<Shuffler />} />
          <Route path={PICK_URL} element={<Picker />} />
          <Route path={ORG_URL} element={<Organizer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
