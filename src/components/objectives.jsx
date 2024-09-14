import React from 'react';
import '../index.css';

const Objectives = ({ objectives }) => {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4 ">Objetivos Estratégicos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">Objetivo</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Meta</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Avance</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Cumplimiento</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => (
              <tr key={obj.id} className="even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{obj.goal}</td>
                <td className="border border-gray-300 px-4 py-2">${obj.target.toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">${obj.progress.toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{obj.compliance}%</td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${
                    obj.compliance < 35
                      ? 'text-red-500'
                      : obj.compliance <= 75
                      ? 'text-orange-500'
                      : 'text-green-500'
                  }`}
                >
                  {obj.compliance < 35
                    ? 'Crítico'
                    : obj.compliance <= 75
                    ? 'Aceptable'
                    : 'Exitoso'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Objectives;
