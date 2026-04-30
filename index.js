require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Hello from Server V3 ✌🏻"
  })
});
app.get('/health', (req, res) => {
  res.status(200).json({
    message: "Healthy ✅"
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});