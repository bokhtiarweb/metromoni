import React, { useEffect, useState } from "react";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";
import { Outlet, useLocation } from "react-router-dom";
import LoginNavbar from "../components/shared/LoginNavbar";
import LoginDashNavbar from "../components/shared/LoginDashNavbar";
import MobileView from "../pages/Mobile/MobileDash/MobileView";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function Main() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const homeLocation = location.pathname === "/" ? true : false;
  const registerLocation = location.pathname === "/register" ? true : false;

  const livehelpPage = location.pathname === "/livehelp" ? true : false;
  const contactUsPae = location.pathname === "/contactus" ? true : false;
  const feedbackPage = location.pathname === "/feedback" ? true : false;
  const faq = location.pathname === "/faq" ? true : false;
  const bangladeshiBrideGroom =
    location.pathname === "/bangladeshibridegroom" ? true : false;

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
      {livehelpPage||
      contactUsPae||
      feedbackPage||
      faq||bangladeshiBrideGroom ? (
        <header className="bg-white hidden sm:block z-50">
          <LoginNavbar></LoginNavbar>
          <LoginDashNavbar isSticky={isSticky}></LoginDashNavbar>
        </header>
      ) : (
        <header className="fixed bg-white top-0 left-0 w-full shadow-md z-50">
          <NavBar></NavBar>
        </header>
      )}

      <main className="pt-16 px-4">
        <div className="hidden sm:block"><Outlet></Outlet></div>
        <div className="block sm:hidden">
          {registerLocation ? <Register></Register> : homeLocation ? <Home></Home> : <MobileView></MobileView>}
        </div>
      </main>
      <footer className="bg-slate-600">
        <Footer></Footer>
      </footer>
    </div>
  );
}
