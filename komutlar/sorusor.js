const Discord = require('discord.js')
const cevaplar = [
  "Evet", 
	"Hay�r", 
	"Muhtemelen", 
	"�mkans�z", 
	"Ne yaz�k ki hay�r", 
	"Maalesef", 
	"Tabii ki", 
	"Belki de", 
	"�imdi s�ylemeyece�im", 
  "Odaklan ve tekrar sor"
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return message.channel.send('Bana sormak istedi�in soruyu yazarm�s�n?')
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
    description: 'Bota soru sorars�n�z.',
    usage: 'sorusor'
  };