const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware for performance and logging
app.use(compression()); // Gzip compression
app.use(morgan('combined')); // Request logging

// Serve static assets efficiently
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d', // cache static files
  etag: false
}));

// Health check for ECS / ALB
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Graceful shutdown (important for ECS)
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

// Fallback route
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
