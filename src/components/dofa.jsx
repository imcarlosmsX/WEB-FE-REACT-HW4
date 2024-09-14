import React from 'react';

const Diagnosis = ({ data }) => {
  return (
    <section id='Diagonostico' className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Diagnóstico</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-justify'>
        {data.map((category) => (
          <div
            key={category.id}
            className="border p-4 rounded-lg shadow-lg border-blue-400 hover:shadow-xl transition duration-300"
          >
            <h3 className="font-bold text-xl mb-2 text-blue-600">{category.type}</h3>
            <ol className="list-decimal ml-4 space-y-4">
              {category.items.map((item, index) => (
                <li key={item.id}>
                  <div className="font-semibold text-gray-700"> {item.description}</div>
                  <p className="mt-1 text-gray-500">{item.additionalInfo}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Diagnosis;
