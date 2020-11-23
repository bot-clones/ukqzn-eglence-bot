const Discord = require("discord.js");

exports.run = function(client, message, args) {

const FwhyCode = message.mentions.users.first();

if (!FwhyCode)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setDescription(
      `${FwhyCode} ` + `**${message.author.username}** Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(EmbedFwhyCode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "FwhyCode",
  usage: "[prefix]aduket-çek <etiket>"
};
