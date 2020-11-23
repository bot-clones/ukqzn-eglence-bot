const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Eğlence Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» !balık-tut :** Denizde balık tutarsınız.
> **» !beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» !ara155 :** Polisi aramanıza yarar.
> **» !efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» !ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» !espri :** Bot sizin için espri yapar.
> **» !hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» !kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» !kaç-cm :** Bot malafat uzunluğunuzu söyler.
> **» !kralol :** Kral olmanıza yarar.
> **» !tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» !yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» !yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» !öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» !şekerye :** Bot size şeker ikram eder.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/davetlinkiniz)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: !yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/davetlinkiniz)** **•** **[Botun Davet Linki](https://www.discord.com/)** **•** **[Web-Site](https://www.discord.com/)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};