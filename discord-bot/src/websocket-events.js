module.exports = (io) => {
  io.on('connection', (socket) => {
    console.info(`[INFO] (${socket.id}) new connected.`);

    socket.on('message', (payload) => {
      console.info(`[INFO] (${socket.id}) new message received!`);
      console.info(`[INFO] (${socket.id}) payload ${payload}.`);
    });
  });
}