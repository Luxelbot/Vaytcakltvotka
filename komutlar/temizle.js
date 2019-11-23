const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak Icin Izniniz Yok!");
if(!args[0]) return message.channel.send("<:slight_frown:495950887898841089> Lutfen Silinicek Mesaj Miktarini Yazin.!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<:grinning:495950668725747733> ${args[0]} Adet Mesaji Sildim.`)
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajý siler.',
  usage: 'temizle <silinicek mesaj sayýsý>'
};