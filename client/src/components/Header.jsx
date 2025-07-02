import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">Senior Vitality</h1>
      <nav>
        <a href="#meals" className="mr-4">Meals</a>
        <a href="#workouts" className="mr-4">Workouts</a>
        <a href="#supplements" className="mr-4">Supplements</a>
      </nav>
    </header>
  );
}

export default Header;