const Discord = require('discord.js')
const cevaplar = [
  "Evet", 
	"Hayýr", 
	"Muhtemelen", 
	"Ýmkansýz", 
	"Ne yazýk ki hayýr", 
	"Maalesef", 
	"Tabii ki", 
	"Belki de", 
	"Þimdi söylemeyeceðim", 
  "Odaklan ve tekrar sor"
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return message.channel.send('Bana sormak istediðin soruyu yazarmýsýn?')
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };  
  exports.help = {
    name: 'sorusor',
    description: 'Bota soru sorarsýnýz.',
    usage: 'sorusor'
  };