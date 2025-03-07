import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Sent from "./MailboxContent/Sent";
import Received from "./MailboxContent/Received";

const received = ["pending", "accepted", "declined", "replied"];
const sent = ["pending", "accepted", "declined", "replied"];

export default function MailBox() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Received</Tab>
          <Tab>Sent</Tab>
        </TabList>
        <TabPanel>
          <div>
            <div>
              {received.map((item, indx) => (
                <button key={indx} className="btn btn-sm">
                  {item}
                </button>
              ))}
            </div>
            <div>
              <Received></Received>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div>
              {sent.map((item, indx) => (
                <button key={indx} className="btn btn-sm">
                  {item}
                </button>
              ))}
            </div>
            <div>
              <Sent></Sent>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
