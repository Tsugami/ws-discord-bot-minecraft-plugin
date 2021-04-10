

module.exports = (io, discordBot) => {
  const onMessage = ({ username, message, createdAt }) => {
    if (!username || !message || !createdAt) {
      return;
    }

    const content = `[${createdAt}] ${username} - ${message}`;
    discordBot.createMessage(content);
  }

  io.on('connection', (socket) => {
    console.info(`[INFO] (WS) ${socket.id} connected.`);

    socket.on('message', (payload) => {
      console.info(`[INFO] (WS) ${socket.id} send message received!`);
      console.info(`[INFO] (WS) ${socket.id} payload `, payload);
      onMessage(payload);
    });
  });
}