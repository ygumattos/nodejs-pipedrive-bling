const pipedrive = require('pipedrive');
const config = require('../../config/default');

pipedrive.Configuration.apiToken = config.pipedrive.token;

module.exports = pipedrive;

