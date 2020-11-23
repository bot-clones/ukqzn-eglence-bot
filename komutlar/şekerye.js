const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

if (!message.guild) {

const EmbedFwhyCode = new Discord.MessageEmbed()//Fwhy Code

    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**")

return message.author.send(EmbedFwhyCode); }

if (message.channel.type !== 'dm') {//Fwhy Code

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setAuthor('Şekerin Tadı Güzel Mi?')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://img-s1.onedio.com/id-55393ff3c0810f6409b05c76/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-c5c81ece991cc33c024b146e871f1591dae29660.gif`)

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
  name: 'şekerye',
  description: 'Şeker Yersiniz!.',
  usage: 'şekerye'
}; 