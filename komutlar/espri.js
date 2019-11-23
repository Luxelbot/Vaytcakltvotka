const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = ['Seni görünce; \ngözlerim dolar, \nkulaklarým euro.','Kar üzerinde yürüyen adama ne denir. Karabasan.','Yýkanan Ton’a ne denir? Washington!','Gidenin arkasýna bakmayýn yoksa geleni göremezsiniz.','+Oðlum canlýlara örnek ver. \n-Kedi, köpek. \n+Cansýzlara örnek ver. \n-Ölü kedi, ölü köpek.','+Kanka ben banyoya 3 kiþi giriyom. \n-Oha nasýl? \n+Hacý, Þakir ve ben. \n-Defol lan!','+Kocanýzla ortak özelliðiniz ne? \n-Ayný gün evlendik.','+Evladým ödevini neden yapmadýn? \n-Bilgisayarým uyku modundaydý, uyandýrmaya kýyamadým.','+Bizim arkadaþ ortamýnda paranýn lafý bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parasý yok.','Annemin bahsettiði elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.','+Acýkan var mý ya? \n-Yok bizde tatlý kan var.','Yýlanlardan korkma, yýlmayanlardan kork.','+Baykuþlar vedalaþýrken ne der? \n-Bay bay baykuþ.','Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.','Aaa siz çok terlemiþsiniz durun size terlik getireyim.','Aklýmý kaçýrdým, 100.000 TL fidye istiyorum.'];
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