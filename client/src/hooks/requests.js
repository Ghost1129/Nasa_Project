const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
const response = await fetch(`${API_URL}/planets`);
return await response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  const result=await response.json();
  return result.sort((a,b)=>a.flight_number-b.flight_number);
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(launch)
    });
  } catch(error){
    return {
      ok: false,
    }
  }
}

async function httpAbortLaunch(id) {
  try{
    return await fetch(`${API_URL}/launches/${id}`,{
      method: 'DELETE'
    })
  } catch(error){
    return {
      ok: false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};