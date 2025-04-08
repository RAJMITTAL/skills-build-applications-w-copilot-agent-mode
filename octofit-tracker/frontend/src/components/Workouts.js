import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://ominous-adventure-6v69jjprq7cxvq5-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="workouts-section">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="component-title">Workouts</h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Add Workout
        </button>
      </div>

      <div className="row g-4">
        {workouts.map(workout => (
          <div key={workout._id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title text-primary mb-0">{workout.name}</h5>
                  <span className="badge bg-info">New</span>
                </div>
                <p className="card-text text-muted">{workout.description}</p>
                <hr className="my-3" />
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-play-circle me-1"></i>Start Workout
                  </button>
                  <div>
                    <button className="btn btn-sm btn-outline-secondary me-2">
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;