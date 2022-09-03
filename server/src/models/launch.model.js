const launches = new Map();

let latestFlightNumber =100;

const launch={
    flightNumber:100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date( 'December 27 ,2030'),
    target:'Kepler-442 b',
    customer: ['Ghost','NASA'],
    success: true,
    upcoming: true,
}

launches.set(launch.flightNumber,launch);

function getAllLauches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch,{
            success: true,
            upcoming: true,
            customers: ['NASA'],
            flightNumber: latestFlightNumber,})
        );
}

function existLaunchById(id){
    return launches.has(id);
}

function abortLaunchById(id){
  const Aborted = launches.get(id);
    Aborted.upcoming = false;
    Aborted.success = false;
    return Aborted;  
}

module.exports = {
    getAllLauches,
    addNewLaunch,
    existLaunchById,
    abortLaunchById
}