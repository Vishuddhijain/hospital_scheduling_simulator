const ProcessTable = ({ processes }) => (
  <table className="w-full mb-10 border-collapse bg-[#0d1117] border border-[#1f2937] rounded-xl text-white">
  <thead className="bg-[#111827]">
    <tr>
      <th className="p-3 border border-[#1f2937] text-cyan-300">Patient</th>
      <th className="p-3 border border-[#1f2937] text-cyan-300">Arrival Time (mins)</th>
      <th className="p-3 border border-[#1f2937] text-cyan-300">Consultation Time (mins)</th>
    </tr>
  </thead>

  <tbody>
    {processes.map((p, index) => (
      <tr key={index} className="hover:bg-[#1a1f27] transition">
        <td className="p-3 border border-[#1f2937]">{p.name}</td>
        <td className="p-3 border border-[#1f2937]">{p.arrivalTime}</td>
        <td className="p-3 border border-[#1f2937]">{p.burstTime}</td>
      </tr>
    ))}
  </tbody>
</table>

);

export default ProcessTable;
