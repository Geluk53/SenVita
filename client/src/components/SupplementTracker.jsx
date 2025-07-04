import React, { useState } from 'react';

function SupplementTracker() {
  const [creatine, setCreatine] = useState(0);

  const logCreatine = () => {
    setCreatine(prev => prev + 5);
  };

  return (
    <section id="supplements" className="mb-8">
      <h2 className="text-2xl font-semibold green-text mb-4">Creatine Tracker</h2>
      <p className="white-text">Daily Creatine: {creatine}g</p>
      <div className="flex space-x-12 mt-2">
        <button onClick={logCreatine} className="nav-button">
          Log 5g Creatine
        </button>
      </div>
    </section>
  );
}

export default SupplementTracker;