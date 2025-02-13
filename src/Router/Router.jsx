import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import ProfileDetail from "../main/ProfileDetail";
import MyHome from "../pages/Dashboard/MyHome";
import Matches from "../pages/Dashboard/Matches";
import Inbox from "../pages/Dashboard/Inbox";
import Search from "../pages/Dashboard/Search";
import DailyMatches from "../pages/Dashboard/DailyMatches";
import Upgrade from "../pages/Dashboard/Upgrade";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  // Dashoard / ProfileDetails routes
  {
    path: "/profiledetail",
    element: <ProfileDetail></ProfileDetail>,
    children: [
      {
        path: "dailymatches",
        element: <DailyMatches></DailyMatches>,
      },
      {
        path: "myhome",
        element: <MyHome></MyHome>,
      },
      {
        path: "matches",
        element: <Matches></Matches>,
      },
      {
        path: "inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "search",
        element: <Search></Search>,
      },
      {
        path: "upgrade",
        element: <Upgrade></Upgrade>,
      },
    ],
  },
]);
