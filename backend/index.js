// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you can add code to handle the form data, such as saving it to a database
  console.log('Received contact form data:', { name, email, message });

  res.status(200).send('Form submitted successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
