const express = require('express');

const app = express();

// get customers API
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Sarah', lastName: 'Smith'},
  ];

  res.json(customers);
})


// get Reviews API
app.get('/api/reviews', (req, res) => {
  const reviews = [
    {id: 1, firstName: 'John', lastName: 'Doe', title: 'University Student',
    content: 'Hok is the bomb'},
    {id: 2, firstName: 'Sarah', lastName: 'Smith', title: 'VCE Student',
    content: 'I love Hok!'},
    {id: 3, firstName: 'Jack', lastName: 'Nguyen', title: 'Parent',
    content: 'The best tutoring service!'},
  ];

  res.json(reviews);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
