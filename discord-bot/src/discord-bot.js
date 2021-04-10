
const { Client } = require('eris');
class DiscordBot {
  constructor (discordBotToken, discordChannelID, onMessage) {
    this.discordChannelID = discordChannelID;
    this.onMessage = onMessage;
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
    console.log(`[INFO] (DISCORD) Logged in as ${this.displayName}!`);
  }

  get displayName () {
    const { username, discriminator } = this._bot.user;
    return `${username}#${discriminator}`;
  }

  _onMessage (msg) {
    const { content, createdAt, author, channel } = msg;

    if (author.bot || channel.id !== this.discordChannelID) {
      return;
    }

    this.onMessage({ content, createdAt, username: author.username });
  }
}
module.exports = DiscordBot;