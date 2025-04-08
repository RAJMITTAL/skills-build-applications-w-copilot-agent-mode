import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://ominous-adventure-6v69jjprq7cxvq5-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="leaderboard-section">
      <h2 className="component-title text-center mb-4">Fitness Leaderboard</h2>
      
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-primary">
                <tr>
                  <th scope="col" className="text-center">#</th>
                  <th scope="col">User</th>
                  <th scope="col" className="text-center">Score</th>
                  <th scope="col" className="text-center">Achievement</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard
                  .sort((a, b) => b.score - a.score)
                  .map((entry, index) => (
                    <tr key={entry._id}>
                      <td className="text-center">
                        {index + 1 === 1 && <span className="badge bg-warning">🥇</span>}
                        {index + 1 === 2 && <span className="badge bg-secondary">🥈</span>}
                        {index + 1 === 3 && <span className="badge bg-danger">🥉</span>}
                        {index + 1 > 3 && <span className="text-muted">{index + 1}</span>}
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="ms-2">{entry.user.username}</span>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="badge bg-success">{entry.score} pts</span>
                      </td>
                      <td className="text-center">
                        {entry.score >= 90 && '🏆'}
                        {entry.score >= 70 && entry.score < 90 && '⭐'}
                        {entry.score < 70 && '🎯'}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;