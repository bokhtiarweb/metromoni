import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/shared/DashboardNavbar";
import Sidebar from "../pages/Dashboard/Sidebar";
import { useState } from "react";
import MobileDashMenu from "../pages/Mobile/MobileDash/MobileDashMenu";
import FooterLogin from "../components/shared/FooterLogin";
import ChatModal from "../pages/Dashboard/ChatModal";

export default function ProfileDetail() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = true;
  
  return (
    <div className={`bg-gray-100 relative ${isSidebarOpen ? "lg:-ml-[200px]" : ""}`}>
      <>
      <header className="bg-[#76a63f] sticky top-0 left-0 w-full shadow-md z-50 hidden sm:block">
        <DashboardNavbar className="-ml-[200px]"></DashboardNavbar>
      </header>
      <header className="bg-[#f97316e8] sticky top-0 left-0 w-full shadow-md z-10 block sm:hidden">
        <MobileDashMenu></MobileDashMenu>
      </header>
      </>
      <main className="max-w-screen-lg mx-auto">
        <Outlet></Outlet>
        <div>
          {user && (
            <Sidebar
              isOpen={isSidebarOpen}
              setIsOpen={setIsSidebarOpen}
            ></Sidebar>
          )}
          <ChatModal></ChatModal>
        </div>
      </main>

      <footer className="bg-slate-600 hidden md:block">
        <FooterLogin></FooterLogin>
      </footer>
      
    </div>
  );
}
