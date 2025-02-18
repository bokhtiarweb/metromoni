import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Banner from "./Shared/Banner";

export default function Inbox() {
  return (
    <div>
      <div className="mb-8">
        <Banner></Banner>
      </div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64">
          {/* PENDING collapse */}
          <div>
            <div className="collapse collapse-plus border border-base-300">
              <input type="checkbox" className="peer min-h-0" defaultChecked />
              <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                PENDING
              </div>
              <div className="collapse-content">
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between items-center">
                    <NavLink
                      to={`/profiledetail/inbox`}
                      className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                    >
                      <span className="text-gray-700">ALL</span>
                      <span className="bg-yellow-300 text-xs p-1 rounded-md">
                        Read and Respond
                      </span>
                    </NavLink>
                  </li>
                  <li className="py-2 flex">
                    <NavLink
                      to={`/profiledetail/inbox/interest`}
                      className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                    >
                      INTERESTS
                    </NavLink>
                  </li>
                  <li className="py-2 flex">
                    <NavLink
                      to={`/profiledetail/inbox/message`}
                      className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                    >
                      MESSAGES
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ACCEPTED collapse */}
          <div>
            <div className="collapse collapse-plus border border-base-300">
              <input type="checkbox" className="peer min-h-0" defaultChecked />
              <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                ACCEPTED
              </div>
              <div className="collapse-content">
                <ul className="mt-2 space-y-2">
                  <li className="py-2 flex">
                    <NavLink
                      to={`/profiledetail/inbox/accepted`}
                      className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                    >
                      INTERESTS
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DECLINED collapse */}
          <div>
            <div className="collapse collapse-plus border border-base-300">
              <input type="checkbox" className="peer min-h-0" defaultChecked />
              <div className="min-h-0 collapse-title p-2 sm:text-xs md:text-sm font-medium">
                DECLINED
              </div>
              <div className="collapse-content">
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between items-center">
                    <NavLink
                      to={`/profiledetail/inbox/all-declined`}
                      className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                    >
                      ALL
                    </NavLink>
                  </li>
                  <li className="py-2 flex">
                    <NavLink
                      to={`/profiledetail/inbox/declined-interest`}
                      className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                    >
                      INTERESTS
                    </NavLink>
                  </li>
                  <li className="py-2 flex">
                    <NavLink
                      to={`/profiledetail/inbox/declined-message`}
                      className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                    >
                      MESSAGES
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ul className="mt-2 space-y-2">
              <li className="flex justify-between items-center">
                <NavLink
                  to={`/profiledetail/inbox/request`}
                  className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                >
                  REQUESTS
                </NavLink>
              </li>
              <li className="flex justify-between items-center">
                <NavLink
                  to={`/profiledetail/inbox/chathistory`}
                  className={`p-2 w-full hover:bg-gray-200 rounded-md`}
                >
                  CHAT HISTORY
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-2">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
