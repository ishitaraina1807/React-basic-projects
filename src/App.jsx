import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import TypeingTest from "./projects/typing-speed-checker/layout"
import Stopwatch from "./projects/stopwatch/layout";
import Practice from "./projects/practice-stuff/layout";
import TodoListEklavya from "./projects/to-do-list-eklavya/layout"
import TodoListIshita from "./projects/to-do-list-ishita/layout"


const App = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/1" element={<TypeingTest/>} />
      <Route path="/2" element={<Stopwatch/>} />
      <Route path="/3" element = {<TodoListIshita/>}/>
      <Route path="/4" element = {<TodoListEklavya/>}/>
      <Route path="/practice" element={<Practice/>} />
      </Routes>
    </div>
  );
};

export default App;
