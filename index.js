
const express = require('express');
const os = require('os'); 
const app = express();


app.get('/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.json({
    greeting: `Hello, ${name}`
  });
});


app.get('/info', (req, res) => {
  const requestTime = new Date().toISOString(); 
  const clientAddress = req.ip ; 
  const hostName = os.hostname();

  res.setHeader('Content-Type', 'application/json');
  res.json({
    time: requestTime,
    client_address: clientAddress,
    host_name: hostName,
    headers: req.headers 
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
