const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {

let FwhyCode = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setTitle("Insufficient Permission")
    .setColor(config.red)
    .addField("Permission needed", perm);

return message.channel.send(FwhyCode).then(m => m.delete(5000));

};

module.exports.equalPerms = (message, user, perms) => {

let FwhyCode = new Discord.MessageEmbed()

    .setAuthor(message.author.username)
    .setColor(config.red)
    .setTitle("Error")
    .addField(`${user} has perms`, perms);

return message.channel.send(FwhyCode).then(m => m.delete(5000));

};

module.exports.botuser = message => {

let FwhyCode = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("You cannot ban a bot.")
    .setColor(config.red);

return message.channel.send(FwhyCode).then(m => m.delete(5000));

};

module.exports.cantfindUser = channel => {

let FwhyCode = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("Could not find that user.")
    .setColor(config.red);

return channel.send(FwhyCode).then(m => m.delete(5000));

};

module.exports.noReason = channel => {

let FwhyCode = new Discord.MessageEmbed()

    .setTitle("Error")
    .setDescription("Please supply a reason.")
    .setColor(config.red);

return channel.send(FwhyCode).then(m => m.delete(5000));

};
//Fwhy Code