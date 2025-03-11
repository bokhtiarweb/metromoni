import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Sent from "./MailboxContent/Sent";
import Received from "./MailboxContent/Received";

const received = ["pending", "accepted", "declined", "replied"];
const sent = ["pending", "accepted", "declined", "replied"];

export default function MailBox() {
  const [receivedMail, setReceivedMail] = useState("pending");
  const [sentMail, setSentMail] = useState("pending");

  const handleReceived = (item) => {
    const lowerCaseItem = item.toLowerCase();
    setReceivedMail(lowerCaseItem)
  };

  const handleSent = (item) => {
    const lowerCaseItem = item.toLowerCase()
    setSentMail(lowerCaseItem)
  }

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Received</Tab>
          <Tab>Sent</Tab>
        </TabList>
        <TabPanel>
          <div>
            <div className="flex gap-2">
              {received.map((item, indx) => (
                <button
                  key={indx}
                  onClick={() => handleReceived(item)}
                  className={`btn btn-sm ${receivedMail === item.toLowerCase() ? "bg-green-500 text-white" : " "}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              {receivedMail === 'pending' && <Received></Received>}
              {receivedMail === 'accepted' && <Received></Received>}
              {receivedMail === 'declined' && <Received></Received>}
              {receivedMail === 'replied' && <Received></Received>}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <div>
              {sent.map((item, indx) => (
                <button key={indx} onClick={() => handleSent(item)} className={`btn btn-sm ${sentMail === item.toLowerCase() ? "bg-green-500 text-white" : " "}`}>
                  {item}
                </button>
              ))}
            </div>
            <div>
            {sentMail === 'pending' && <Sent></Sent>}
              {sentMail === 'accepted' && <Sent></Sent>}
              {sentMail === 'declined' && <Sent></Sent>}
              {sentMail === 'replied' && <Sent></Sent>}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
