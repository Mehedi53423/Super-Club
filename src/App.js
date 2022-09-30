import Header from "./components/Header";
import Content from "./components/Content";
import ActivityControl from "./components/ActivityControl";
import "./App.css";

function App() {
  return (
    <div className="flex bg-slate-200">
      <div className="w-3/4 border md:mx-10 md:px-28">
        <Header></Header>
        <Content></Content>
      </div>
      <div className="w-1/4">
        <ActivityControl></ActivityControl>
      </div>
    </div>
  );
}

export default App;
