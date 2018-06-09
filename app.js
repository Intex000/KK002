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
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(message.content === "$gg") {
  message.channel.sendMessage('meow meow' + (kUser) + 'Hello');
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
// ---------------------------------------------------
if (!message.content.startsWith(PREFIX)) return;  
var print = console.log;
let prefix = config.prefix;

let args2 = messageArray.slice(1);  
switch (args[0]) {
  case "discord":
    var ediscord = new Discord.RichEmbed()
    .setTitle("https://discord.gg/FZThJ2b");
    message.channel.sendEmbed(ediscord);
    print((message.author.username), "issued bot command: discord")
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: discord");
    break;

  case "ip":
    message.channel.sendMessage("The IP is: SlingShotV.aternos.me \nVersion: 1.11x");
    print((message.author.username), "issued bot command: ip");
    message.guild.channels.find('name', "¤》logs").send((message.author.username) + " issued bot command: ip");

    break;
  case ":":
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: :");
    break;
  case "randomnumber":
    var randomNumb = Math.random();
    message.channel.send((randomNumb));
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: randomnumber");
  break;  
  case "cmds":
  var embed = new Discord.RichEmbed()
  .setTitle("Please use $help ")
  message.channel.sendMessage(embed)
    message.guild.channels.find('name', "¤》logs").sendMessage((message.author.username) + " issued bot command: cmds");
  break;
  case "test":
    
  case "help":


    break;
}
});
bot.login(process.env.token);
