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

if (cmd === '&kick'){
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send("I cant find that user ok! peace");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("plsno");
  if(kUser.hasPermission) return message.channel.send("no dont kick that he is good00");
  
  let kickEmbed = new Discord.RichEmbed()
  .setDescription("PlayerKickedOk")
  .setcolor("blue")
  .addField("KickedUser", '${kUser} with id ${kUser.id}')
  .addField("Kicked By", '<@${message.author.id}> with id ${message.author.id}')
  .addField("REASONHM", kReason);
  
  let CHANNEL = message.guild.channels.find('name', "logs");
  if(!CHANNEL) return message.channel.send("no");
  
  message.guild.member(kUser).kick(kReason); 
  
  CHANNEL.send(kickEmbed)
}

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
    break;

  case "ip":
    message.channel.sendMessage("The IP is: SlingShotV.aternos.me \nVersion: 1.11x");
    print((message.author.username), "issued bot command: ip");
    break;
  case ":":
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
  case "randomnumber":
    var randomNumb = Math.random();
    message.channel.send((randomNumb));
  break;  
  case "cmds":
  var embed = new Discord.RichEmbed()
  .setTitle("Please use $help ")
  message.channel.sendMessage(embed)
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
    break;
}
});
bot.login(process.env.token);
