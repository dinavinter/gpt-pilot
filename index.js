require('dotenv').config()

const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/ping', (req, res) => {
  console.log('Ping path accessed.'); // Log when ping path is accessed
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}).on('error', (err) => {
  console.log(`Error starting the server: ${err.stack}`);
  process.exit(1);
}); // App start listening on the port and error handling