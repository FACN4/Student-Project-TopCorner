const tape = require("tape");
const runDbBuild = require("../server/database/build.js");

tape("--------------database_tests.js----------tape is working", t => {
  t.ok(true, "tape is working");
  t.equal(
    process.env.NODE_ENV,
    "test",
    "The process.env.NODE_ENV environment should be test"
  );
  t.end();
});

tape("runDbBuild works", t => {
  runDbBuild(err => {
    t.error(err, "runDB should return a null error");
    t.end();
  });
});

// test('testing getData', (t) => {
//   runDbBuild(() => {
//     getUserData((err, users) => {
//       t.error(err, 'getData should return a null error');
//       t.ok(users.length > 0, true, 'The table should have a length > 0');
//       t.end();
//     });
//   });
// });
