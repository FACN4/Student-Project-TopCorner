const express = require('express');

const app = express();
app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Sol' },
    { id: 2, firstName: 'Bubs' },
    { id: 3, firstName: 'T' },
    { id: 4, firstName: 'Ben' },
  ];
  res.json(customers);
});

const port = 4040;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
