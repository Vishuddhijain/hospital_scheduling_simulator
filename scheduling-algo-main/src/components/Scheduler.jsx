import { useState, useEffect } from "react";
import ProcessForm from "./ProcessForm";
import SRJF from "./SRJF";
import FCFS from "./FCFS";
import RR from "./RR.jsx";
import PriorityNonPreemptive from "./PriorityNonPreemptive.jsx";
import PriorityScheduling from "./PriorityScheduling";
import ProcessDetails from "./ProcessDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SJF from "./SJF";

const Scheduler = () => {
  const [algorithm, setAlgorithm] = useState("FCFS");
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", true);
  }, []);

  const addProcess = (process) => {
    setProcesses([...processes, process]);
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full text-white transition-all p-10"
      style={{
        background: "linear-gradient(135deg, #00e6a0, #00d0ff, #0077ff)",
        backgroundAttachment: "fixed",
      }}
    >
      <ToastContainer />

      {/* White-glow Card Container */}
      <div className="w-full max-w-6xl bg-[#0d1117] bg-opacity-95 rounded-2xl shadow-2xl p-8 border border-[#1f2937]">
        
        {/* Title */}
        <div className="text-center mb-10 border-b border-gray-700 pb-6">
          <h1 className="text-4xl font-bold text-cyan-300">
            Hospital Patient Scheduling Simulator
          </h1>
          <p className="text-gray-400 mt-2">
            Visualize different CPU scheduling algorithms
          </p>
        </div>

        {/* Algorithm Selection */}
        <div className="flex flex-col items-center text-center mb-10">
          <label className="text-2xl font-medium mb-4">Select Algorithm:</label>

          <select
            className="border border-[#1f2937] p-3 rounded-lg bg-[#111827] text-white"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="FCFS">First Come First Serve (FCFS)</option>
            <option value="SJF">Shortest Job First (SJF)</option>
            <option value="SRTF">Shortest Remaining Time First (SRTF)</option>
            <option value="RR">Round Robin (RR)</option>
            <option value="Priority (Non-Preemptive)">Priority Scheduling (Non-Preemptive)</option>
            <option value="Priority (Preemptive)">Priority Scheduling (Preemptive)</option>
          </select>
        </div>

        {/* TWO BOXES SIDE BY SIDE (Perfect alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Box – Patient Form */}
          <div className="w-full">
            <ProcessForm
              processes={processes}
              addProcess={addProcess}
              algorithm={algorithm}
            />
          </div>

          {/* Right Box – Patient Details */}
          <div className="w-full">
            <ProcessDetails
              processes={processes}
              setProcesses={setProcesses}
            />
          </div>
        </div>

        {/* Algorithm Visualization Section */}
        <div className="mt-10">
          {algorithm === "FCFS" && <FCFS processes={processes} />}
          {algorithm === "SJF" && <SJF processes={processes} />}
          {algorithm === "SRTF" && <SRJF processes={processes} />}
          {algorithm === "RR" && <RR processes={processes} />}
          {algorithm === "Priority (Non-Preemptive)" && (
            <PriorityNonPreemptive processes={processes} />
          )}
          {algorithm === "Priority (Preemptive)" && (
            <PriorityScheduling processes={processes} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
