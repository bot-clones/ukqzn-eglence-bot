const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");

const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

exports.run = function(client, message) {

var FwhyCode = slots[Math.floor(Math.random() * slots.length)];
var FwhyCode2 = slots[Math.floor(Math.random() * slots.length)];
var FwhyCode3 = slots[Math.floor(Math.random() * slots.length)];

  if (FwhyCode === FwhyCode2 && FwhyCode === FwhyCode) { return message.channel.send(stripIndents`**Tebrikler, kazandınız!** \n\n${FwhyCode} **:** ${FwhyCode2} **:** ${FwhyCode3}`);

  } else {
   return message.channel.send(stripIndents`**Eyvah, kaybettin!** \n\n${FwhyCode} **:** ${FwhyCode2} **:** ${FwhyCode3}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
