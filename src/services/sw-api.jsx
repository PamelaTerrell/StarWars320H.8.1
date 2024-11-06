
export async function getAllStarships() {
    try {
      const response = await fetch('https://swapi.dev/api/starships/');
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error("Failed to fetch starships:", error);
      return []; 
    }
  }
  