
const express = require('express');
const path = require('path');
const app = express();

// serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(5000, () => {
  console.log("Car website running on port 5000");
});
