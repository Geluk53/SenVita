import React, { useState, useEffect } from 'react';

function WorkoutGuide() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/api/workouts')
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(err => {
        console.error('Error fetching workouts:', err);
        setError('Failed to load workouts');
      });
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section id="workouts" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Strength Workouts</h2>
      {workouts.length === 0 && !error ? (
        <p>No workouts available</p>
      ) : (
        <ul className="mt-4">
          {workouts.map((workout, index) => (
            <li key={index} className="text-lg mb-4">
              <strong>{workout.name}</strong>
              <p>{workout.description}</p>
              {workout.videoUrl && (
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src={workout.videoUrl.replace('watch?v=', 'embed/')}
                    title={workout.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default WorkoutGuide;

