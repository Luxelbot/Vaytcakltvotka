const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyar� :warning:', '`ban` adli komutu ozel mesajlarda kullanamazsin.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ban sebebini yazmalisin.');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacagini yazmalisin.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan Yasaklama :bangbang: ')
    .addField('Yasaklanan Kullanici:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yasaklayan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Yasaklama Sebebi:', reason);
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: '�stedi�iniz ki�iyi sunucudan yasaklar.',
  usage: 'ban [kullan�c�] [sebep]'
};