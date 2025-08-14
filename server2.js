const express = require("express");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
const app = express();
const PORT = 3000;

// ===== RUN PYTHON SCRIPT ON STARTUP =====
const python = spawn('python', ['Player/scripts/JSON_Maker.py']); // or 'python3'

python.stdout.on('data', (data) => {
  console.log(`[PYTHON]: ${data.toString().trim()}`);
});

python.stderr.on('data', (data) => {
  console.error(`[PYTHON ERROR]: ${data.toString().trim()}`);
});

python.on('close', (code) => {
  if (code !== 0) {
    console.error(`[${new Date().toISOString()}] Python script exited with code ${code}`);
    process.exit(1);
  }

  // Load the updated songs DB only after Python script completes
  const songs = require('./songs');

  // ===== CORE SERVER SETUP =====

  // Enable CORS
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  // Serve static files
  const playerDir = path.join(__dirname, "player");
  app.use(express.static(playerDir));

  // Serve music files
  const musicDir = path.join(process.env.USERPROFILE || process.env.HOME, "Music");
  fs.access(musicDir, fs.constants.R_OK, (err) => {
    if (err) {
      console.error(`[${new Date().toISOString()}] Music directory not accessible at ${musicDir}`);
    }
  });

  app.use("/music", express.static(musicDir, {
    fallthrough: false
  }));

  // Home route
  app.get("/", (req, res) => {
    res.sendFile(path.join(playerDir, "player.html"));
  });

  // Songs route
  app.get("/songs", (req, res) => {
    res.json(songs);
  });

  // 404 handler
  app.use((req, res) => {
    res.status(404).send('Not Found');
  });

  // Error handler
  app.use((err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] ERROR: ${err.message}`);
    res.status(500).send('Internal Server Error');
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`[${new Date().toISOString()}] Server running at http://localhost:${PORT}`);
  });
});

// Global error handling
process.on('uncaughtException', (err) => {
  console.error(`[FATAL ERROR] ${err.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error(`[UNHANDLED REJECTION] ${reason}`);
});
