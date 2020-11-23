const Discord = require("discord.js");

exports.run = (client, message, args) => {

let FwhyCode = args.slice(0).join("+");
if (!FwhyCode) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + FwhyCode;

const EmbedFwhyCode = new Discord.MessageEmbed()

.setImage(link);

return message.channel.send(EmbedFwhyCode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ejderha-yazı",
  description: "Ejderha Logosu Yaparsınız",
  usage: "ejderha <yazı>"
};
