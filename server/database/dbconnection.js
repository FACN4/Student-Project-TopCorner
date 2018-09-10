const { Pool } = require('pg');
require('env2')('./config.env');

let { DEV_DB_URL } = process.env;
const { NODE_ENV } = process.env;
const { TEST_DB_URL } = process.env;

if (NODE_ENV === 'test') {
  DEV_DB_URL = TEST_DB_URL;
}

if (!DEV_DB_URL) throw new Error('Enviroment variable DEV_DB_URL must be set');

const options = {
  connectionString: DEV_DB_URL,
};

options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);
