'use strict';

const npx = require('npx-wrap');

async function cli(service, args = [], child_process_options = {}) {
    await npx.async('aws', [service, ...args], child_process_options);
}

module.exports = cli;
