import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const photo = "/cat.jpg";

export default function PendingContent() {
  return (
    <>
      <Tabs>
        <TabList>
          <div className="flex items-center justify-between">
            <div>
              <Tab>
                <p>Received</p>
              </Tab>
              <Tab>
                <p>Sent</p>
              </Tab>
            </div>
            <div>
              <button className="btn btn-sm bg-gray-300 border-gray-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 text-gray-500">Select All</button>
              <span className="px-2">|</span>
              <button className="btn btn-sm bg-gray-300 border-gray-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 text-gray-500">Delete All</button>
            </div>
          </div>
        </TabList>

        <TabPanel>
          <div>
            <div className="p-3 border bg-white shadow-sm rounded-md flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700 sm:text-sm">
                  Show filtered messages
                </span>
              </label>
              <button className="bg-lime-500 text-white px-3 py-1 rounded-md sm:text-sm">
                Edit Partner Preference
              </button>
            </div>

            {/* Message Section */}
            <div className="mt-6 bg-gray-200 p-6 text-center text-gray-600 italic border rounded-md">
              Currently there are no requests in this folder
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div className="bg-base-300 shadow-lg p-4 bg-gray-100">
              <div className="flex justify-between items-center">
                <input type="checkbox" className="checkbox checkbox-xs" />
                <FaDeleteLeft className="text-xl cursor-pointer"></FaDeleteLeft>
              </div>
              <div className="flex border-b border-gray-300 pb-4">
                <img src={photo} alt="" className="w-28 h-28 rounded-full" />
                <div>
                  <div className="sm:grid lg:flex items-center gap-3 ml-2">
                    <span className="text-lg">Afroz Mushtari (BGD3032330)</span>
                    <span className="text-sm sm:hidden">|</span>
                    <span className="text-sm">
                      Last activity - Within 4 days ago
                    </span>
                  </div>
                  <div className="ml-2 mt-2">
                    <p className="text-sm text-gray-500">
                      Age : 21 Yrs | Height : 5 ft 4 in / 162 cm | Religion :
                      Islam | Sect : Sunni | Location : Bangladesh | Education :
                      Bachelors | Occupation : Student
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      className="text-sm text-blue-500"
                    >
                      View full Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-4 space-y-2">
                <p className="text-sm text-gray-500">
                  You have sent a chat request on 15th February 2025
                </p>
                <p className="text-sm text-gray-500">
                  Hi, I am interested in your profile. Would you like to chat
                  with me?
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
