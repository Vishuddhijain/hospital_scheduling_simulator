import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProcessForm = ({ processes, addProcess, algorithm }) => {
  const [process, setProcess] = useState({
    name: "",
    burstTime: "",
    arrivalTime: "",
    priority: "",
    queueLevel: "",
    timeQuantum: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure patient name is unique & valid
    const trimmedName = process.name.trim();
    if (!trimmedName) {
      toast.error("Patient name cannot be empty!", { position: "top-right", autoClose: 2000 });
      return;
    }
    if (processes.some((p) => p.name === trimmedName)) {
      toast.error("Patient name must be unique!", { position: "top-right", autoClose: 2000 });
      return;
    }

    // Ensure numerical values are valid
    const burstTime = parseInt(process.burstTime);
    const arrivalTime = parseInt(process.arrivalTime);
    const priority = parseInt(process.priority);
    const queueLevel = parseInt(process.queueLevel);
    const timeQuantum = parseInt(process.timeQuantum);

    if (isNaN(burstTime) || burstTime <= 0 || isNaN(arrivalTime) || arrivalTime < 0) {
      toast.error("Please enter valid Consultation Time and Arrival Time!", { position: "top-right", autoClose: 2000 });
      return;
    }

    if (["Priority (Preemptive)", "Priority (Non-Preemptive)"].includes(algorithm) && (isNaN(priority) || priority < 0)) {
      toast.error("Please enter a valid Triage Level!", { position: "top-right", autoClose: 2000 });
      return;
    }

    if (["MLQ", "MLFQ"].includes(algorithm) && (isNaN(queueLevel) || queueLevel < 1)) {
      toast.error("Queue Level must be at least 1!", { position: "top-right", autoClose: 2000 });
      return;
    }

    if (["RR", "MLFQ"].includes(algorithm) && (isNaN(timeQuantum) || timeQuantum <= 0)) {
      toast.error("Time Quantum must be greater than 0!", { position: "top-right", autoClose: 2000 });
      return;
    }

    // Add the patient with trimmed name (we keep internal props same)
    addProcess({ ...process, name: trimmedName });
    toast.success("Patient added successfully!", { position: "top-right", autoClose: 1500 });

    // Reset form
    setProcess({
      name: "",
      burstTime: "",
      arrivalTime: "",
      priority: "",
      queueLevel: "",
      timeQuantum: "",
    });
  };

  return (
  <form
  onSubmit={handleSubmit}
  className="p-6 mb-10 rounded-xl shadow-lg bg-[#0d1117] border border-[#1f2937] text-white"
>
  <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-300">
    Add a Patient
  </h2>

  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Enter Patient Name"
      value={process.name}
      onChange={(e) => setProcess({ ...process, name: e.target.value })}
      className="p-3 rounded bg-[#111827] text-white border border-[#374151] placeholder-gray-400"
    />

    <input
      type="number"
      placeholder="Enter Consultation Time (mins)"
      min="1"
      value={process.burstTime}
      onChange={(e) => setProcess({ ...process, burstTime: e.target.value })}
      className="p-3 rounded bg-[#111827] text-white border border-[#374151] placeholder-gray-400"
    />

    <input
      type="number"
      placeholder="Enter Arrival Time (mins)"
      min="0"
      value={process.arrivalTime}
      onChange={(e) => setProcess({ ...process, arrivalTime: e.target.value })}
      className="p-3 rounded bg-[#111827] text-white border border-[#374151] placeholder-gray-400"
    />

    {["Priority (Preemptive)", "Priority (Non-Preemptive)"].includes(algorithm) && (
      <input
        type="number"
        placeholder="Enter Triage Level (1 = Critical)"
        min="0"
        value={process.priority}
        onChange={(e) => setProcess({ ...process, priority: e.target.value })}
        className="p-3 rounded bg-[#111827] text-white border border-[#374151] placeholder-gray-400"
      />
    )}
  </div>

  <button
    type="submit"
    className="mt-4 w-full p-3 rounded-lg text-white font-semibold 
               bg-gradient-to-r from-green-400 to-blue-500 hover:scale-[1.02] transition-all"
  >
    Add Patient
  </button>
</form>
  
  );
};

export default ProcessForm;
