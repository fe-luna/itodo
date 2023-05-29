import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Inbox from "./inbox";
import Preview from "./preview";
import FilterTag from "./filter-tag";
import "./style.scss";
import Layouts from "../layouts";
function Pages() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/today",
          element: <Home />,
        },
        {
          path: "/inbox",
          element: <Inbox />,
        },
        {
          path: "/preview",
          element: <Preview />,
        },
        {
          path: "/filter-tag",
          element: <FilterTag />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Pages;
