import React, { useState, useEffect } from 'react';

function MealPlanner() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5002/api/meals')
      .then(res => res.json())
      .then(data => {
        const uniqueMeals = Array.from(new Map(data.map(meal => [meal._id, meal])).values());
        setMeals(uniqueMeals);
      })
      .catch(err => {
        console.error('Error fetching meals:', err);
        setError('Failed to load meals');
      });
  }, []);

  const addMeal = () => {
    fetch('http://localhost:5002/api/meals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Chicken & Quinoa', description: 'High-protein meal', ingredients: ['chicken', 'quinoa'], instructions: 'Cook and mix', protein: 30 }),
    })
      .then(res => res.json())
      .then(data => setMeals([...meals, data]))
      .catch(err => console.error('Error adding meal:', err));
  };

  return (
    <section id="meals" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Meal Planner</h2>
      <button onClick={addMeal} className="bg-blue-500 text-white px-4 py-2 rounded text-lg">
        Add High-Protein Meal
      </button>
      <ul className="mt-4">
        {meals.map((meal, index) => (
          <li key={index} className="text-lg mb-4">
            <strong>{meal.name}</strong> ({meal.protein}g protein)
            <p>{meal.description}</p>
            <p>Ingredients: {meal.ingredients.join(', ')}</p>
            <p>Instructions: {meal.instructions}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MealPlanner;