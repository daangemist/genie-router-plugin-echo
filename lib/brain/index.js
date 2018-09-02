
async function process(message) {
    return { output: `ECHO ${message.input}` };
}

async function start() {
    return { process };
}

module.exports = { start };
