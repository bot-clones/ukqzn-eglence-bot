const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("FwhyCode | Hemen Diyorum Abi 1 Saniye..").then(message => {

    var FwhyCode = [

      "**Senin Malafatın  18CM ** :eggplant: ",
      "**Senin Malafatın  11CM ** :eggplant:",
      "**Senin Malafatın 32CM  ** :eggplant:",
      "**Senin Malafatın  35CM ** :eggplant:",
      "**Senin Malafatın  8CM  ** :eggplant:",
      "**Senin Malafatın  65CM  ** :eggplant:",
      "**Senin Malafatın 5CM  ** :eggplant:",
      "**Senin Malafatın 31CM  ** :eggplant:",
      "**Senin Malafatın  14CM ** :eggplant:",
      "**Senin Malafatın  1CM ** :eggplant:"

    ];

    var FwhyCode = FwhyCode[Math.floor(Math.random() * FwhyCode.length)];

    message.edit(`${FwhyCode}`);
  
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçcm", "cmkaç", "kaçcm", "cm-kaç"],
  permLevel: 0
};

exports.help = {
  name: "kaç-cm",
  description: "Malafatını Söyler.",
  usage: "kaçcm"
};