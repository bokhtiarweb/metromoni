import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import LivehelpChatModal from "./Dashboard/Modals/LivehelpChatModal";

export default function LiveHelp() {
  const [liveChat, setLiveChat] = useState(false);

  return (
    <div className="max-w-screen-lg mx-auto pb-8">
      <div>
        <h2 className="text-xl font-semibold">Live Help</h2>
        <div className="border-t-2 border-b-2 border-dotted my-6 py-6">
          <p className="text-sm">
            BangladeshiMatrimony is eager to help you find your partner at the
            earliest. Our Customer Service team will be pleased to assist you
            anytime you have a query. You can contact our Customer Service team
            in one of the following ways.
          </p>
          <div>
            <p className="font-bold mt-10">Helpline Numbers</p>
            <div className="flex justify-between mt-4">
              <span className="font-bold">Phone Number</span>
              <span>:</span>
              <span className="text-sm">
                09610002022 [Operating Days and Hours: Saturday to Thursday,
                9am-6pm (Excluding Govt. Holidays)]
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FaComments className="text-green-500 text-xl"></FaComments>
            <span className="text-sm">
              Live Chat (Operating Days and Hours- 365 days, 7am-3:30am)
            </span>
          </div>
          <p className="mt-6 text-sm">
            You can also chat live with our Customer Service team online and get
            instant solutions to all your queries right away.
          </p>
          <div className="text-center mt-8 relative">
            <button onClick={() => setLiveChat(true)} className="btn btn-sm bg-success">Chat Now</button>
            {liveChat && <LivehelpChatModal setLiveChat={setLiveChat}></LivehelpChatModal>}
          </div>
        </div>
      </div>
    </div>
  );
}
