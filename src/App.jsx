import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
// import TypeingTest from "./projects/typing-speed-checker/layout"
// import Stopwatch from "./projects/stopwatch/layout";
// import Practice from "./projects/practice-stuff/layout";
// import TodoListEklavya from "./projects/to-do-list-eklavya/layout"
// import TodoListIshita from "./projects/to-do-list-ishita/layout"


const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
};

export default App;
