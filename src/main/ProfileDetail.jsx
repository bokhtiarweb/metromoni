import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/shared/DashboardNavbar";
import Footer from "../components/shared/Footer";
import Sidebar from "../pages/Dashboard/Sidebar";
import { useState } from "react";

export default function ProfileDetail() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = true;
  
  return (
    <div className={`relative ${isSidebarOpen ? "lg:-ml-[200px]" : ""}`}>
      <header className="bg-[#76a63f] sticky top-0 left-0 w-full shadow-md z-50 hidden sm:block">
        <DashboardNavbar className="-ml-[200px]"></DashboardNavbar>
      </header>
      <main className="max-w-screen-lg mx-auto px-4">
        <Outlet></Outlet>
        <div>
          {user && (
            <Sidebar
              isOpen={isSidebarOpen}
              setIsOpen={setIsSidebarOpen}
            ></Sidebar>
          )}
        </div>
      </main>
      <footer className="bg-slate-600">
        <Footer></Footer>
      </footer>
    </div>
  );
}
