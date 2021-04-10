module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`[INFO] (${socket.id}) new connected.`);

    socket.on('message', (payload) => {
      console.log(`[INFO] (${socket.id}) new message received!`);
      console.log(`[INFO] (${socket.id}) payload ${payload}.`);
    });
  });
}