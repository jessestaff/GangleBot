const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client();


//bot turning on code
bot.on("ready", async () => {
console.log(`ayyyy`)
bot.user.setActivity('From Above', { type: 'WATCHING' })
});


//commands for messages
bot.on("message", async message => {
    if(message.author.bot) return

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    //simple hello command
    if(cmd === `${prefix}hello`){
        return message.channel.send("Do not speak to me Mortal.")
    }

    //start timer command
    if(cmd === `${prefix}start`){
        start = false;
        second = 0;
        i = 1; 

        function myLoop() { 
          setTimeout(function() {
            second = second + 1;
            i++;  
            if (i < 10000) {     
              myLoop();             
            }                       
          }, 1000)
        }
        
        myLoop(); 
          message.channel.send("started")
    }


    //end timer command
    if(cmd === `${prefix}stopt`){
        message.channel.send(second + " seconds")
        second = 0;
        i = 9999;
    }

});


bot.login(botconfig.token);