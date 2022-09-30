import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import ActivityControl from "./components/ActivityControl";
import "./App.css";

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);
  const handleClick = (time) => {
    setExerciseTime(exerciseTime + parseInt(time));
  };

  return (
    <div className="md:flex bg-slate-200">
      <div className="md:w-3/4 border md:mx-10 md:px-28 px-5">
        <Header></Header>
        <Content handleClick={handleClick}></Content>
      </div>
      <div className="md:w-1/4">
        <ActivityControl exerciseTime={exerciseTime}></ActivityControl>
      </div>
    </div>
  );
}

export default App;
