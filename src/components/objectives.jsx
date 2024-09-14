import React from 'react';
import '../index.css';

const Objectives = ({ objectives }) => {
  return (
    <section id='Objetivos' className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">3. Objetivos Estratégicos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <th className="border px-4 py-3 text-left">Objetivo</th>
              <th className="border px-4 py-3 text-left">Meta</th>
              <th className="border px-4 py-3 text-left">Avance</th>
              <th className="border px-4 py-3 text-left">Cumplimiento</th>
              <th className="border px-4 py-3 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => (
              <tr key={obj.id} className="even:bg-gray-100 odd:bg-white hover:bg-gray-200 transition-colors duration-300">
                <td className="border px-4 py-3 text-gray-800">{obj.goal}</td>
                <td className="border px-4 py-3 text-gray-800">${obj.target.toLocaleString()}</td>
                <td className="border px-4 py-3 text-gray-800">${obj.progress.toLocaleString()}</td>
                <td className="border px-4 py-3 text-gray-800">{obj.compliance}%</td>
                <td
                  className={`border px-4 py-3 font-bold ${
                    obj.compliance < 35
                      ? 'text-red-600'
                      : obj.compliance <= 75
                      ? 'text-yellow-500'
                      : 'text-green-600'
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
