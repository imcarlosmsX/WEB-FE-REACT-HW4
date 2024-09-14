import React from 'react';

const Diagnosis = ({ data }) => {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-justify">
      {data.map((category) => (
        <div key={category.id} className="border p-4">
          <h3 className="font-bold text-xl mb-2">{category.type}</h3>
          <ol className="list-decimal ml-4 space-y-4">
            {category.items.map((item, index) => (
              <li key={item.id}>
                <div className="font-semibold"> {item.description}</div>
                <p className="mt-1">{item.additionalInfo}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
};

export default Diagnosis;
