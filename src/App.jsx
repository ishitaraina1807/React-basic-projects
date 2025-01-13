import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      </Routes>
   
    </div>
  );
};

export default App;
