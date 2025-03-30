import React, { useEffect, useState } from "react";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import { Outlet, useLocation } from "react-router-dom";
import LoginNavbar from "../components/shared/LoginNavbar";
import LoginDashNavbar from "../components/shared/LoginDashNavbar";
import MobileView from "../pages/Mobile/MobileDash/MobileView";
import Register from "../pages/Register";
import Home from "../pages/Home";
import FooterLogin from "../components/shared/FooterLogin";
import Logout from "../pages/Dashboard/Logout";
import LiveHelp from "../pages/LiveHelp";
import Faq from "../pages/Faq";
import ContactUs from "../pages/ContactUs";
import Feedback from "../pages/Feedback";
import MembershipUpgrade from "../pages/MembershipUpgrade";
import TermCondition from "../pages/TermCondition";
import BangladeshiBrideGroom from "../pages/BangladeshiBrideGroom";
import Login from "../pages/LogIn";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function Main() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const homeLocation = location.pathname === "/" ? true : false;
  const registerLocation = location.pathname === "/register" ? true : false;

  const livehelpPage = location.pathname === "/livehelp" ? true : false;
  const contactUsPage = location.pathname === "/contactus" ? true : false;
  const feedbackPage = location.pathname === "/feedback" ? true : false;
  const faq = location.pathname === "/faq" ? true : false;
  const bangladeshiBrideGroom =
    location.pathname === "/bangladeshibridegroom" ? true : false;
  const logoutPath = location.pathname === "/logout" ? true : false;
  const login = location.pathname === "/login" ? true : false;
  const membershipUpgrade = location.pathname === "/membershipupgrade" ? true : false;
  const termCondition = location.pathname === "/termcondition" ? true : false;
  const privacyPolicy = location.pathname === "/privacypolicy" ? true : false;

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled past 100px, make menu sticky
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {livehelpPage ||
      contactUsPage ||
      feedbackPage ||
      faq ||
      bangladeshiBrideGroom || membershipUpgrade || termCondition || privacyPolicy ? (
        <header className="bg-white block z-50">
          <LoginNavbar></LoginNavbar>
          <LoginDashNavbar isSticky={isSticky}></LoginDashNavbar>
        </header>
      ) : (
        <header className="fixed bg-gray-100 top-0 left-0 w-full shadow-md z-50">
          <NavBar></NavBar>
        </header>
      )}

      <main className="md:pt-16 px-4 bg-gray-100">
        <div className="hidden sm:block">
          <Outlet></Outlet>
        </div>
        <div className="block sm:hidden">
          {(registerLocation && <Register></Register>) ||
            (homeLocation && <Home></Home>) ||
            (logoutPath && <Logout></Logout>) || (login && <Login></Login>) ||
            (livehelpPage && <LiveHelp></LiveHelp>) || (contactUsPage && <ContactUs></ContactUs>) || (feedbackPage && <Feedback></Feedback>) || (faq && <Faq></Faq>) || (bangladeshiBrideGroom && <BangladeshiBrideGroom></BangladeshiBrideGroom>) || (membershipUpgrade && <MembershipUpgrade></MembershipUpgrade>) || (termCondition && <TermCondition></TermCondition>) || (privacyPolicy && <PrivacyPolicy></PrivacyPolicy>) || (
              <MobileView></MobileView>
            )}
        </div>
      </main>

      <footer className="bg-slate-600">
        {(homeLocation && <Footer></Footer>) ||
          (registerLocation && <Footer></Footer>) || (
            logoutPath && (<FooterLogin></FooterLogin>) ||  (<FooterLogin></FooterLogin>)
          )}
      </footer>
    </div>
  );
}
