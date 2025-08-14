const express = require("express");
const path = require("path");
const fs = require("fs"); // Added for directory checking
const cors = require("cors");
const app = express();
const PORT = 3000;


app.use(cors()); // ← Allow all origins (you can also restrict it if needed)
// Enhanced CORS with logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] CORS - Incoming request from origin: ${req.headers.origin}`);
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
  });
  
  next();
});

// Serve static files from player directory with logging
const playerDir = path.join(__dirname, "player");
app.use(express.static(playerDir, {
  setHeaders: (res, filePath) => {
    console.log(`[${new Date().toISOString()}] Serving static file: ${filePath}`);
  }
}));

// Serve music files with enhanced logging and error handling
const musicDir = path.join(process.env.USERPROFILE, "Music");

// Check if music directory exists at startup
fs.access(musicDir, fs.constants.R_OK, (err) => {
  if (err) {
    console.error(`[${new Date().toISOString()}] ERROR: Music directory not accessible at ${musicDir}`);
    console.error(`[${new Date().toISOString()}] Please ensure the directory exists and has proper permissions`);
  } else {
    console.log(`[${new Date().toISOString()}] Music directory found at: ${musicDir}`);
  }
});

app.use("/music", express.static(musicDir, {
  setHeaders: (res, filePath) => {
    console.log(`[${new Date().toISOString()}] Serving music file: ${filePath}`);
  },
  fallthrough: false // Don't continue to next middleware if file not found
}));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ERROR: ${err.message}`);
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Route logging
app.get("/", (req, res) => {
  console.log(`[${new Date().toISOString()}] Serving player.html`);
  res.sendFile(path.join(__dirname, "player", "player.html"));
});

// 404 handler with logging
app.use((req, res) => {
  console.warn(`[${new Date().toISOString()}] 404 - Route not found: ${req.originalUrl}`);
  res.status(404).send('Not Found');
});

// Server startup with more info
app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Server started on http://localhost:${PORT}`);
  console.log(`[${new Date().toISOString()}] Serving player files from: ${playerDir}`);
  console.log(`[${new Date().toISOString()}] Serving music files from: ${musicDir}`);
});

// Log server errors
process.on('uncaughtException', (err) => {
  console.error(`[${new Date().toISOString()}] UNCAUGHT EXCEPTION: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(`[${new Date().toISOString()}] UNHANDLED REJECTION at: ${promise}, reason: ${reason}`);
});