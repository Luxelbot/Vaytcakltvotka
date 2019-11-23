const Discord = require('discord.js')

exports.run = (client, message, args) => {
	try {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Roller`, message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' | '))
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda Bulunan Roller`, '�zg�n�m ama sunucunuzda ya �ok fazla rol bulunuyor ya da hi� rol bulunmuyor. Bunlar� g�steremiyorum. Discord buna izin vermiyor.')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roles'],
	permLevel: 0,
	kategori: 'kullan�c�'
}

exports.help = {
	name: 'roller',
	description: 'Sunucuda bulunan rolleri g�sterir.',
	usage: 'roller'
}