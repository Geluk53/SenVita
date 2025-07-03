import React from 'react';
import Header from './components/Header';
import MealPlanner from './components/MealPlanner';
import WorkoutGuide from './components/WorkoutGuide';
import SupplementTracker from './components/SupplementTracker';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Senior Vitality App</h1>
      <Header />
      <MealPlanner />
      <WorkoutGuide />
      <SupplementTracker />
    </div>
  );
}

export default App;