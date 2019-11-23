const Discord = require('discord.js')

exports.run = (client, msg, args) => {
   let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Kimin Avatarina Bakmak Istiyorsun!')
}});
   const Discord = require('discord.js')
        const kullanicibilgimk = new Discord.RichEmbed()
        .setTitle(member.user.tag+" kullanicisinin profil fotoðrafi!")
        .setImage(member.user.avatarURL)
        .setFooter("Vaytcakltvotka - Avatar Sistemi")
        return msg.channel.send(kullanicibilgimk);
    }
	
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'avatar',
 description: 'Avatarýnýzý veya etiketlediðiniz kiþinin avatarýný atar.',
 usage: 'avatar [@Kiþi]'
 }