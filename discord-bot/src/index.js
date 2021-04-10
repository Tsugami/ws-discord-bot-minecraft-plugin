const express = require('express');
const { Server } = require("socket.io");
const http = require('http');
const websocketEvents = require('./websocket-events');
const client = require('./discord-bot');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

websocketEvents(io);

const PORT = process.env.PORT || 3333;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

httpServer.listen(PORT, () => {
  client.login(DISCORD_TOKEN);
  console.info(`[INFO] http server listening at http://localhost:${PORT}`)
})