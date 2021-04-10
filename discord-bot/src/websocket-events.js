module.exports = (io) => {
  io.on('connection', (socket) => {
    console.info(`[INFO] (WS) ${socket.id} connected.`);

    socket.on('message', (payload) => {
      console.info(`[INFO] (WS) ${socket.id} send message received!`);
      console.info(`[INFO] (WS) ${socket.id} payload `, payload);
    });
  });
}