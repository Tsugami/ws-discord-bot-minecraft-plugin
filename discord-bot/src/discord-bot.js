
const { Client } = require('eris');
class DiscordBot {
  constructor (discordBotToken, discordChannelID) {
    this.discordChannelID = discordChannelID;
    this._bot = new Client(discordBotToken);
  }

  createMessage (content) {
    return this._bot.createMessage(this.discordChannelID, content);
  }

  connect () {
    this._registerEvents();
    return this._bot.connect();
  }

  _registerEvents () {
    this._bot.on('ready', this._onReady.bind(this));
    this._bot.on('messageCreate', this._onMessage.bind(this));
  }

  _onReady () {
    console.log(`[INFO] (DISCORD) Logged in as ${client.user.tag}!`);
  }

  _onMessage (msg) {
    if (msg.content === 'ping') {
      this._bot.createMessage(msg.channel.id, "Pong!");
    }
  }
}
module.exports = DiscordBot;