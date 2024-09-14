const Diagnosis = ({ data }) => {
    return (
      <section className="p-6 grid grid-cols-2 gap-4">
        {data.map((category) => (
          <div key={category.id} className="border p-4">
            <h3 className="font-bold">{category.type}</h3>
            <ul className="mt-2">
              {category.items.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  };
  
  export default Diagnosis;
  