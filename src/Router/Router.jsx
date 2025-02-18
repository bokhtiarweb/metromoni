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
import All from "../pages/Dashboard/Inbox/Pending/All";
import Interest from "../pages/Dashboard/Inbox/Pending/Interest";
import Message from "../pages/Dashboard/Inbox/Pending/Message";
import Accepted from "../pages/Dashboard/Inbox/Accepted/Accepted";
import AllDeclined from "../pages/Dashboard/Inbox/Declined/AllDeclined";
import InterestDeclined from "../pages/Dashboard/Inbox/Declined/InterestDeclined";
import MessageDeclined from "../pages/Dashboard/Inbox/Declined/MessageDeclined";
import Request from "../pages/Dashboard/Inbox/Request";
import Chathistory from "../pages/Dashboard/Inbox/Chathistory";
import ViewProfile from "../pages/Dashboard/ViewProfile";
import Register from "../pages/Register";

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
      {
        path: "register",
        element: <Register></Register>,
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
        path: "viewprofile",
        element: <ViewProfile></ViewProfile>,
      },
      {
        path: "inbox",
        element: <Inbox></Inbox>,
        children: [
          {
            path: "",
            element: <All></All>,
          },
          {
            path: "interest",
            element: <Interest></Interest>,
          },
          {
            path: "message",
            element: <Message></Message>,
          },
          {
            path: "accepted",
            element: <Accepted></Accepted>,
          },
          {
            path: "all-declined",
            element: <AllDeclined></AllDeclined>,
          },
          {
            path: "declined-interest",
            element: <InterestDeclined></InterestDeclined>,
          },
          {
            path: "declined-message",
            element: <MessageDeclined></MessageDeclined>,
          },
          {
            path: "request",
            element: <Request></Request>,
          },
          {
            path: "chathistory",
            element: <Chathistory></Chathistory>,
          },
        ],
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
