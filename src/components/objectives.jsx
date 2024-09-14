import React from 'react';
import '../index.css'
const Objectives = ({ objectives }) => {
    return (
      <section className="p-6">
        <h2 className="text-xl font-bold">Objetivos Estratégicos</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th>Código</th>
              <th>Objetivo</th>
              <th>Meta</th>
              <th>Avance</th>
              <th>Cumplimiento</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.goal}</td>
                <td>{obj.target}</td>
                <td>{obj.progress}</td>
                <td>{obj.compliance}%</td>
                <td className={obj.compliance < 35 ? 'text-red-500' : obj.compliance <= 75 ? 'text-orange-500' : 'text-green-500'}>
                  {obj.compliance < 35 ? 'Crítico' : obj.compliance <= 75 ? 'Aceptable' : 'Exitoso'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default Objectives;
  