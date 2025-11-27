
const ProcessDetails = ({ processes, setProcesses }) => {
  const clearProcesses = () => {
    setProcesses([]);
  }

  return (
    <div className="p-6 rounded-xl border border-[#1f2937] bg-[#0d1117] text-white shadow-lg">
  <h2 className="text-xl font-semibold mb-4 text-center text-cyan-300">
    Patient Details
  </h2>

  {processes.length === 0 ? (
    <p className="text-gray-400 text-center">No patients added yet.</p>
  ) : (
    <div className="flex gap-4 justify-center flex-wrap">
      {processes.map((p, index) => (
        <div
          key={index}
          className="w-56 p-4 rounded-xl bg-[#111827] border border-[#1f2937] hover:scale-[1.03] transition shadow-md"
        >
          <p className="font-semibold text-lg text-blue-300">{p.name}</p>
          <p className="text-sm"><strong>Consultation:</strong> {p.burstTime} mins</p>
          <p className="text-sm"><strong>Arrival:</strong> {p.arrivalTime} mins</p>

          {p.priority !== "" && (
            <p className="text-sm"><strong>Triage Level:</strong> {p.priority}</p>
          )}
        </div>
      ))}

      <button
        onClick={clearProcesses}
        className="mt-6 w-full p-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white font-semibold"
      >
        Clear All Patients
      </button>
    </div>
  )}
</div>

  );
};

export default ProcessDetails;
