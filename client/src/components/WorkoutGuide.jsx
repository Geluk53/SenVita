import React, { useState, useEffect } from 'react';

function WorkoutGuide() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/api/workouts')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        const uniqueWorkouts = Array.from(new Map(data.map(workout => [workout._id, workout])).values());
        setWorkouts(uniqueWorkouts);
      })
      .catch(err => {
        console.error('Error fetching workouts:', err);
        setError('Failed to load workouts. Please try again later.');
      });
  }, []);

  if (error) return <div className="text-red-500 blank-line">{error}</div>;

  return (
    <section id="workouts" className="mb-8">
      <div className="blank-line">
        <h2 className="text-2xl font-semibold green-text mb-4">Strength Workouts</h2>
      </div>
      <div className="blank-line">
        {workouts.length === 0 && !error ? (
          <p className="white-text">No workouts available</p>
        ) : (
          <ul className="mt-4">
            {workouts.map((workout, index) => (
              <li key={index} className="text-lg mb-4">
                <strong className="green-text">{workout.name}</strong>
                <p className="white-text">{workout.description}</p>
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
      </div>
    </section>
  );
}

export default WorkoutGuide;