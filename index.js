const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client();

bot.on("ready", async () => {
console.log(`ayyyy`)
bot.user.setActivity('From Above', { type: 'WATCHING' })
});

bot.on("message", async message => {
    if(message.author.bot) return

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if(cmd === `${prefix}hello`){
        return message.channel.send("Do not speak to me Mortal.")
    }

    
});


bot.login(botconfig.token);