const express = require('express');
const path = require('path');

const app = express();

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Start server (IMPORTANT: 0.0.0.0)
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Car website running on port ${PORT}`);
});
