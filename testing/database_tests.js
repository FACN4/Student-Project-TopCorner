const tape = require('tape');
const { buildDatabase, makeEmptyTables } = require('../server/database/build.js');
const { getDataTeams } = require('../server/queries/getData.js');
const { db } = require('../server/database/dbconnection');

tape('--------------database_tests.js----------check tape is working', (t) => {
  t.ok(true, 'tape is working');
  t.equal(process.env.NODE_ENV, 'test', 'The process.env.NODE_ENV environment should be test');
  t.end();
});

tape('testing runDbBuild', (t) => {
  buildDatabase()
    .then(() => {
      t.pass('Database build successful ');
      t.end();
    })
    .catch((err) => {
      t.error(err, 'database build failed');
      t.end();
    });
});

tape('testing teams table', (t) => {
  buildDatabase().then(() => {
    getDataTeams()
      .then((res) => {
        if (res.length === 32) {
          t.pass('teams table built successfully');
        }
        t.end();
      })
      .catch((err) => {
        t.error(err, 'teams tables should have 32 rows');
        t.end();
      });
  });
});

db.none(makeEmptyTables).catch((err) => {
  console.log(err);
  new Error(err);
});
