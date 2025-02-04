// main.js
const MiningCoordinator = require('./miner');

// Start the mining process
new MiningCoordinator().start().catch(console.error);