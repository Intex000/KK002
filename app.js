  const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./settings.json");
const PREFIX ="$";

// Log in
bot.on('ready', async () => {
  console.log("Sir! KK002 is ready! ", (bot.user.tag));  
  bot.user.setGame("Prefix: sv.");
});
// Commands
bot.on("message", function(message) {
  let messageArray = message.content.split(" ");
  let cmd = messageArray; 


if (!message.content.startsWith(PREFIX)) return;  
var args = message.content.substring(PREFIX.length).split(" ");
var print = console.log;
let prefix = config.prefix;

let args2 = messageArray.slice(1);  
switch (args[0]) {
  case "discord":
    var ediscord = new Discord.RichEmbed()
    .setTitle("https://discord.gg/FZThJ2b");
    message.channel.sendEmbed(ediscord);
    print((message.author.username), "issued bot command: discord")
    message.guild.channels.find('name', "logs").send((message.author.username), "issued bot command: discord");
    break;

  case "ip":
    message.channel.sendMessage("The IP is: SlingShotV.aternos.me \nVersion: 1.11x");
    print((message.author.username), "issued bot command: ip");
    message.guild.channels.find('name', "logs").send((message.author.username), "issued bot command: ip");
    break;
  case ":":
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
    message.guild.channels.find('name', "logs").send((message.author.username), "issued bot command: :");
  case "randomnumber":
    var randomNumb = Math.random();
    message.channel.send((randomNumb));
    message.guild.channels.find('name', "logs").send((message.author.username), "issued bot command: randomnumber");
  break;  
  case "cmds":
  var embed = new Discord.RichEmbed()
  .setTitle("Please use $help ")
  message.channel.sendMessage(embed)
    message.guild.channels.find('name', "logs").send((message.author.username), "issued bot command: cmds");
  break;
  case "help":

    var embed = new Discord.RichEmbed()
    .setTitle("Commands List!")   
    .setDescription(config.help)
    .setFooter("The bot prefix is: sv.")
    .setColor("993")
    message.reply("Check your DMs")
    message.author.sendEmbed(embed);
      console.log((message.author.username), "issued bot command: help");
    message.guild.channels.find('name', "logs").send((message.author.username), "issued bot command: help");
    break;
}
});
bot.login(process.env.token);
