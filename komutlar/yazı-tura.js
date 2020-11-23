const Discord = require("discord.js");
const chancejs = require("chance");
const chance = new chancejs();

const cevaplar = ["**YAZI-TURA: __TURA__**", "**YAZI-TURA: __YAZI__**"];

exports.run = function(client, message) {

var FwhyCode2 = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (FwhyCode2 === "YAZI-TURA: __YAZI__**") {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(FwhyCode2)
      .setThumbnail(
        "http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg"
      );

return message.channel.send(EmbedFwhyCode);

  } else if (FwhyCode2 === "**YAZI-TURA: __TURA__**") {

    const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(FwhyCode2)
      .setThumbnail(
        "https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg"
      );

return message.channel.send(EmbedFwhyCode);

  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yazıtura",
  description: "Yazı-Tura atar.",
  usage: "yazıtura"
};
