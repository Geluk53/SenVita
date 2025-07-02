import React from 'react';
import Header from './components/Header.jsx';
import MealPlanner from './components/MealPlanner.jsx';
import WorkoutGuide from './components/WorkoutGuide.jsx';
import SupplementTracker from './components/SupplementTracker.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Senior Vitality App</h1>
        <MealPlanner />
        <WorkoutGuide />
        <SupplementTracker />
      </main>
    </div>
  );
}

export default App;