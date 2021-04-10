const { Server } = require("socket.io");
const http = require('http');
const websocketEvents = require('./websocket-events');


const httpServer = http.createServer();
const io = new Server(httpServer);

websocketEvents(io);

const port = process.env.PORT || 3333;

httpServer.listen(port, () => {
  console.info(`[INFO] http server listening at http://localhost:${port}`)
})