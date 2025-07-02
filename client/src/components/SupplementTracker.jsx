import React, { useState } from 'react';

function SupplementTracker() {
  const [creatine, setCreatine] = useState(0);

  const logCreatine = () => {
    setCreatine(creatine + 5);
    alert('Logged 5g of creatine!');
  };

  return (
    <section id="supplements" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Creatine Tracker</h2>
      <p className="text-lg">Daily Creatine: {creatine}g</p>
      <button onClick={logCreatine} className="bg-blue-500 text-white px-4 py-2 rounded text-lg">
        Log 5g Creatine
      </button>
    </section>
  );
}

export default SupplementTracker;