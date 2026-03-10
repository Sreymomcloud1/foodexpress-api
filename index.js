const express = require('express');
const app = express();
const PORT = 3000;

// GET API Route
app.get('/', (req, res) => {
  res.json({ 
    message: "Welcome to FoodExpress API", 
    status: "Success",
    timestamp: new Date() 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});