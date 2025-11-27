
import { useEffect } from "react";
import Scheduler from "./components/Scheduler";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Hospital Patient Scheduling Simulator";
  }, []);
  return (
  <div className="min-h-screen p-6"
     style={{
       background: "linear-gradient(135deg, #00e6a0, #00d0ff, #0077ff)",
       backgroundAttachment: "fixed"
     }}
>
  <div className="max-w-7xl mx-auto">
    <Scheduler />
  </div>
</div>


  );
}

export default App;
