
import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api'; 
import StarshipCard from './components/StarshipCard'; 
import './style.css'

function App() {
  const [starships, setStarships] = useState([]); 

  useEffect(() => {
    
    async function fetchStarships() {
      const starshipsData = await getAllStarships(); 
      setStarships(starshipsData); 
    }

    fetchStarships(); 
  }, []); 

  return (
    <div className="App">
      <h1>Starships</h1>
      <div className="starship-list">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

