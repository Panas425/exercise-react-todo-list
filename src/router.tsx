import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./App";
import { About } from "./components/About";
import { EditInput } from "./components/EditInput";
import { ListInput } from "./components/ListInput";
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