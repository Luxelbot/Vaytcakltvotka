const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri y�kleniyor.').then(message => {
      var espriler = ['Seni g�r�nce; \ng�zlerim dolar, \nkulaklar�m euro.','Kar �zerinde y�r�yen adama ne denir. Karabasan.','Y�kanan Ton�a ne denir? Washington!','Gidenin arkas�na bakmay�n yoksa geleni g�remezsiniz.','+O�lum canl�lara �rnek ver. \n-Kedi, k�pek. \n+Cans�zlara �rnek ver. \n-�l� kedi, �l� k�pek.','+Kanka ben banyoya 3 ki�i giriyom. \n-Oha nas�l? \n+Hac�, �akir ve ben. \n-Defol lan!','+Kocan�zla ortak �zelli�iniz ne? \n-Ayn� g�n evlendik.','+Evlad�m �devini neden yapmad�n? \n-Bilgisayar�m uyku modundayd�, uyand�rmaya k�yamad�m.','+Bizim arkada� ortam�nda paran�n laf� bile olmaz. \n-Niye ki? \n+��nk� hi� birimizin paras� yok.','Annemin bahsetti�i elalem diye bir �rg�t var illuminatiden daha tehlikeli yemin ederim.','+Ac�kan var m� ya? \n-Yok bizde tatl� kan var.','Y�lanlardan korkma, y�lmayanlardan kork.','+Bayku�lar vedala��rken ne der? \n-Bay bay bayku�.','Beni Ayda bir sinemaya g�t�rme, Marsta bir sinemaya g�t�r.','Aaa siz �ok terlemi�siniz durun size terlik getireyim.','Akl�m� ka��rd�m, 100.000 TL fidye istiyorum.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};