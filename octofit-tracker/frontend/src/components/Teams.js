import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://ominous-adventure-6v69jjprq7cxvq5-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="teams-section">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="component-title">Teams</h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>Create Team
        </button>
      </div>

      <div className="row">
        {teams.map(team => (
          <div key={team._id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">{team.name}</h5>
              </div>
              <div className="card-body">
                <h6 className="text-muted mb-3">Team Members</h6>
                <ul className="list-group list-group-flush">
                  {team.members.map(member => (
                    <li key={member._id} className="list-group-item d-flex justify-content-between align-items-center">
                      {member.username}
                      <span className="badge bg-primary rounded-pill">
                        Active
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer bg-light">
                <button className="btn btn-sm btn-outline-primary me-2">
                  <i className="bi bi-pencil me-1"></i>Edit
                </button>
                <button className="btn btn-sm btn-outline-success">
                  <i className="bi bi-person-plus me-1"></i>Add Member
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;