const API_URL = 'http://localhost:8080';

// Load planets and return as JSON.
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`)
  return await response.json();
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
 
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {

}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};