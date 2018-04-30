const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./package.json");
const PREFIX ="sv.";


// Log in
bot.on('ready', async () => {
  console.log("Sir! KK002 is ready! ", (bot.user.tag));  
  bot.user.setActivity("Prefix: sv.", {type: "playing"});
});
// Commands
bot.on("message", function(message) {
  let messageArray = message.content.split(" ");
  let cmd = messageArray;
  if(message.content === "sv.kk002"){
  bot.channel.get(433130096287678464).sendMessage("HELLO LOL bye");
  }


if (!message.content.startsWith(PREFIX)) return;  
var args = message.content.substring(PREFIX.length).split(" ");
var print = console.log;
let prefix = config.prefix;

let args2 = messageArray.slice(1);
let owner = message.guild.roles.find("name", "Owner") 
let admin = message.guild.roles.find("name", "Admin")
let moderator = message.guild.roles.find("name", "Moderator")   
switch (args[0]) {
  case "discord":
    message.channel.sendMessage("https://discordapp.com/invite/YMRp8RT");
    print((config.thread), "A User just executed a command: sv.discord")
    break;

  case "ip":
    message.channel.sendMessage("The IP is: ")
    print((config.thread), "A User just executed a command: sv.ip")
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
  .setTitle("Please use sv.help ")
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
      console.log("A User just executed a command: sv.help")
    break;
}
});
bot.login(process.env.token);
