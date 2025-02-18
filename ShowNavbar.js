import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[1500px] p-10">
        <h2 className="text-3xl font-bold">Scroll Down to See Effect</h2>
        <p className="mt-4 text-gray-700">
          This is a sample long content. Keep scrolling to see how the menu sticks to the top.
        </p>
      </div>
    </div>
  );
};

export default App;
