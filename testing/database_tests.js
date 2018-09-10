const tape = require('tape');
const runDbBuild = require('../server/database/build.js');
const getData = require('../server/queries/getData.js');

tape('--------------database_tests.js----------check tape is working', (t) => {
  t.ok(true, 'tape is working');
  t.equal(process.env.NODE_ENV, 'test', 'The process.env.NODE_ENV environment should be test');
  t.end();
});

tape('testing runDbBuild', (t) => {
  runDbBuild((err) => {
    t.error(err, 'runDB should return a null error');
    t.end();
  });
});

tape('testing teams table', (t) => {
  runDbBuild((err) => {
    getData((err, teams) => {
      t.error(err, 'getData should return a null error');
      console.log(teams.length);
      t.ok(teams.length === 32, true, 'The teams table should have a length 32');
      t.end();
    });
  });
});
