import React, { useState } from "react";

const Dashboard = () => {
  const [sessions] = useState(10);
  const [accuracy] = useState(85);

  return (
    <div className="dashboard">
      <h2>Your Progress</h2>

      <div className="stats">
        <div className="box">
          <h3>{sessions}</h3>
          <p>Workout Sessions</p>
        </div>

        <div className="box">
          <h3>{accuracy}%</h3>
          <p>Accuracy</p>
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${accuracy}%` }}
        ></div>
      </div>

      <p>Performance Level: {accuracy > 80 ? "Excellent 💪" : "Keep Improving 👍"}</p>
    </div>
  );
};

export default Dashboard;