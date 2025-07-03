import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <a href="#meals" className="hover:underline">Meals</a>
        <a href="#workouts" className="hover:underline">Workouts</a>
        <a href="#supplements" className="hover:underline">Supplements</a>
      </nav>
    </header>
  );
}

export default Header;