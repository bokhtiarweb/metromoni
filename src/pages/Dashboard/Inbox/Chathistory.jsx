import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const photo = "/cat.jpg";

export default function Chathistory() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <p>CHAT HISTORY</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            {/* Message Section */}
            <div className="mt-6 bg-gray-200 p-6 text-center text-gray-600 italic border rounded-md">
              Currently there are no requests in this folder
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
