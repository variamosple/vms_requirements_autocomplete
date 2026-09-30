const os = require('node:os');

const serviceStartTime = Date.now();

function getHealth(version = "1.0.0") {
    const startTime = Date.now();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    return {
        status: "UP",
        serviceName: "vms_requirements_autocomplete",
        version: version,
        uptimeSeconds: Math.floor((Date.now() - serviceStartTime) / 1000),
        timestamp: new Date().toISOString(),
        responseTimeMs: Date.now() - startTime,
        checks: {
            memory: {
                usedMb: Math.round(usedMemory / (1024 * 1024)),
                totalMb: Math.round(totalMemory / (1024 * 1024)),
                percentage: Number(((usedMemory / totalMemory) * 100).toFixed(1))
            }
        }
    };
}

module.exports = {
    getHealth
};
