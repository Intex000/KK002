const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./settings.json");
const PREFIX ="$";

// Log in
bot.on("ready", () => {
  console.log("===================================")
  console.log("Sir, KK002 is ready!")
  console.log("The BOT IS BACK!")
  console.log("===================================")
  bot.user.setGame('mc');
});
// Commands
bot.on("message", async message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0]; 
  let args = messageArray.slice(1)
 // --------------------------------------------------
 if(cmd === "$reportbug") {
  const sayMessage = args.join(" ");
  var ekick = new Discord.RichEmbed() 
  .setTitle("Bug Report")
  .setDescription(sayMessage)
  .setFooter("Reported by: " + message.author.username)
  .setColor("ff0000");
  message.guild.channels.find('name', "¤》reports").sendEmbed(ekick)
  message.delete().catch();
  message.author.sendMessage("Thanks for reporting! Your report will be reviewed soon.")
 }
  
  if(cmd === "$help") {
       var embed = new Discord.RichEmbed()
    .setTitle("Commands List!")   
    .setDescription(config.help)
    .setFooter("The bot prefix is: $")
    .setColor("993")
    message.reply("Check your DMs")
    message.author.sendEmbed(embed);
      console.log((message.author.username), "issued bot command: help");
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: help"); 
  }
  if(cmd === "$discord") {
   var ediscord = new Discord.RichEmbed()
    .setTitle("https://discord.gg/FZThJ2b");
    message.channel.sendEmbed(ediscord);
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: discord"); 
  }
  if(cmd === "$ip") {
   message.channel.sendMessage("The IP is: SlingShotV.aternos.me \nVersion: 1.11x");
    message.guild.channels.find('name', "¤》logs").send((message.author.username) + " issued bot command: ip"); 
  }
  if(cmd === "$:") {
   if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: :"); 
  }
  if(cmd === "$randomnumber") {
   var randomNumb = Math.random();
    message.channel.send((randomNumb));
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: randomnumber"); 
  }
// ---------------------------------------------------
if (!message.content.startsWith(PREFIX)) return;  
var print = console.log;
let prefix = config.prefix;

let args2 = messageArray.slice(1);  
switch (args[0]) {
  case "discord":
    
    break;

  case "ip":
    

    break;
  case ":":
  
    break;
  case "randomnumber":
    
  break;  
  case "cmds":

  break;
  case "test":
    
  case "help":


    break;
}
});
bot.login(process.env.token);
