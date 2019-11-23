const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek Ýstediðiniz Mesajý Yazýnýz.');
  message.delete();
      const mesajat = new Discord.RichEmbed()
	  .setTitle("Vaytcakltvotka Ozel Mesaj!")
	  .addField("Mesaj Icerigi", mesaj, true)
      .setColor("RANDOM")

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dm'],
  permLevel: 4
};

exports.help = {
  name: 'vaytcakltvotkaherkesedmkomut',
  description: 'Ýstediðiniz þeyi bota duyurtur. Sadece Bot Kurucularý Yapar.',
  usage: 'vaytcakltvotkaherkesedmkomut [duyurmak istediðiniz þey]'
};
