require('dotenv/config');

const express = require('express');
const { Server } = require("socket.io");
const http = require('http');
const DiscordBot = require('./discord-bot');
const websocketEvents = require('./websocket-events');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const bot = new DiscordBot(process.env.DISCORD_TOKEN, process.env.DISCORD_CHANNEL_ID);

websocketEvents(io, bot);

const PORT = process.env.PORT || 3333;

httpServer.listen(PORT, () => {
  console.info(`[INFO] (SERVER) http server listening at http://localhost:${PORT}`);
  bot.connect();
})