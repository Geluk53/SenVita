import React, { useState, useEffect } from 'react';

function MealPlanner() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5002/api/meals')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        const uniqueMeals = Array.from(new Map(data.map(meal => [meal._id, meal])).values());
        setMeals(uniqueMeals);
      })
      .catch(err => {
        console.error('Error fetching meals:', err);
        setError('Failed to load meals. Please try again later.');
      });
  }, []);

  const addMeal = async () => {
    if (isAdding) return;
    setIsAdding(true);

    try {
      // Check if meal already exists in MongoDB
      const response = await fetch('http://localhost:5002/api/meals');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const existingMeals = await response.json();
      const mealExists = existingMeals.some(meal => meal.name === 'Chicken & Quinoa');

      if (mealExists) {
        setError('Meal "Chicken & Quinoa" already exists.');
        setIsAdding(false);
        return;
      }

      const newMeal = {
        name: 'Chicken & Quinoa',
        description: 'High-protein meal',
        ingredients: ['chicken', 'quinoa'],
        instructions: 'Cook and mix',
        protein: 30,
      };

      const postResponse = await fetch('http://localhost:5002/api/meals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMeal),
      });

      if (!postResponse.ok) throw new Error(`HTTP error! status: ${postResponse.status}`);
      const data = await postResponse.json();

      setMeals(prevMeals => {
        const exists = prevMeals.some(meal => meal._id === data._id);
        if (!exists) {
          return [...prevMeals, data];
        }
        return prevMeals;
      });
      setIsAdding(false);
    } catch (err) {
      console.error('Error adding meal:', err);
      setError('Failed to add meal. Please try again.');
      setIsAdding(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <section id="meals" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Meal Planner</h2>
      {error && (
        <div className="text-red-500 mb-4">
          {error}
          <button
            onClick={clearError}
            className="ml-4 bg-gray-300 text-black px-2 py-1 rounded"
          >
            Clear
          </button>
        </div>
      )}
      <button
        onClick={addMeal}
        disabled={isAdding}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add High-Protein Meal
      </button>
      {meals.length === 0 ? (
        <p>No meals available</p>
      ) : (
        <ul className="mt-4">
          {meals.map((meal) => (
            <li key={meal._id} className="text-lg mb-4">
              <strong>{meal.name}</strong> ({meal.protein}g protein)
              <p>{meal.description}</p>
              <p>Ingredients: {meal.ingredients.join(', ')}</p>
              <p>Instructions: {meal.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MealPlanner;