const {getAllLauches, addNewLaunch,existLaunchById, abortLaunchById} = require('../../models/launch.model')

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLauches());
}

function httpAddNewLaunch(req,res){
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error:'Bad Request'
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error:'Bad Date'
        })
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req,res){
    const launchID = Number(req.params.id);


    if(!existLaunchById(launchID)){
        return res.status(404).json({
            error:'Launch Not Found'
        })
    }

    const aborted = abortLaunchById(launchID);
    return res.status(200).json(aborted)


}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}