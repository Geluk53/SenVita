import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const ids = ['meals', 'workouts', 'supplements'];
    setTimeout(() => {
      ids.forEach(id => {
        if (!document.getElementById(id)) {
          console.warn(`Section ID "${id}" not found in DOM`);
        }
      });
    }, 500);
  }, []);

  return (
    <header className="bg-black text-white p-4">
      <div className="blank-line">
        <h1 className="text-3xl font-bold green-text text-center mb-4">SenVita</h1>
      </div>
      <nav className="flex justify-center space-x-12 blank-line">
        <a href="#meals" className="nav-button">
          Meals
        </a>
        <a href="#workouts" className="nav-button">
          Workouts
        </a>
        <a href="#supplements" className="nav-button">
          Supplements
        </a>
      </nav>
    </header>
  );
}

export default Header;