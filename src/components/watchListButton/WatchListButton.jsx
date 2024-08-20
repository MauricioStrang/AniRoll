//Button component that starts the request for the plan-to-watch list
//No worky
'use client';

import { useState } from 'react';

const WatchListButton = () => {
  const [planToWatchList, setPlanToWatchList] = useState([]);
  const [error, setError] = useState(null);


  const fetchPlanToWatch = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch('/api/mal-plan-to-watch', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch plan to watch list');
      }

      const data = await response.json();
      setPlanToWatchList(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={fetchPlanToWatch}>Show My Plan to Watch List</button>
      {error && <p>Error: {error}</p>}
      <ul>
        {planToWatchList.map((item) => (
          <li key={item.node.id}>{item.node.title}</li> // Adjust based on the API response structure
        ))}
      </ul>
    </div>
  );
};

export default WatchListButton;