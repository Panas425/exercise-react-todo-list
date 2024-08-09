import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./App";
import { About } from "./components/About";
import { EditInput } from "./components/EditInputPage";
import { ListInput } from "./components/ListInputPage";
import { HomePage } from "./components/HomePage";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="editinput" element={<EditInput />} />
        <Route path="listinput" element={<ListInput />} />
      </Route>
    )
  );