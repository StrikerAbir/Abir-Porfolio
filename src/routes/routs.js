import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import RightSide from "../Pages/RightSide/RightSide";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <RightSide></RightSide>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);