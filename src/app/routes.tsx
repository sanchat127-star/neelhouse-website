import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { HomeAlt } from "./components/pages/HomeAlt";
import { About } from "./components/pages/About";
import { Inspiration } from "./components/pages/Inspiration";
import { Programs } from "./components/pages/Programs";
import { Approach } from "./components/pages/Approach";
import { GetInvolved } from "./components/pages/GetInvolved";
import { Quiz } from "./components/pages/Quiz";
import { Deployment } from "./components/pages/Deployment";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomeAlt }, // Using alternative layout
      { path: "about", Component: About },
      { path: "inspiration", Component: Inspiration },
      { path: "programs", Component: Programs },
      { path: "approach", Component: Approach },
      { path: "quiz", Component: Quiz },
      { path: "get-involved", Component: GetInvolved },
      { path: "deployment", Component: Deployment },
      { path: "*", Component: NotFound },
    ],
  },
]);