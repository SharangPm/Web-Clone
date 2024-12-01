import { createBrowserRouter } from "react-router-dom";
import Notifications from "../pages/Notifications";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Root from "../layout/Root";
import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";
import Display from "../pages/Display";
import Appearance from "../pages/Appearance";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "explore", element: <Explore /> },
      { path: "notifications", element: <Notifications /> },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "display",
            element: <Display />,
            children: [{ path: "appearance", element: <Appearance /> }],
          },
        ],
      },
    ],
  },
]);
