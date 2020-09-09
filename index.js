const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client();

bot.on("ready", async () => {
console.log(`ayyyy`)
bot.user.setActivity('From Above', { type: 'WATCHING' })
});

bot.login(botconfig.token);