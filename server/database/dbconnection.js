const pgp = require('pg-promise')();
require('env2')('./config.env');

let { DB_URL } = process.env;
const { NODE_ENV, TEST_DB_URL } = process.env;

if (NODE_ENV === 'test') {
  DB_URL = TEST_DB_URL;
}

if (!DB_URL) throw new Error('Enviroment variable DEV_DB_URL must be set');

const db = pgp(DB_URL);

module.exports = { db };
