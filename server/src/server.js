const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const {loadPlanetsData} = require('./models/planet.model');

async function start() {
    await loadPlanetsData()
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
start();
