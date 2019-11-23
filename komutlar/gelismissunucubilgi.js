const Discord = require('discord.js')

exports.run = (client, message, args) => {
	let region = {
			"us-central": "Amerika :flag_us:",
			"us-east": "Do�u Amerika :flag_us:",
			"us-south": "G�ney Amerika :flag_us:",
			"us-west": "Bat� Amerika :flag_us:",
			"eu-west": "Bat� Avrupa :flag_eu:",
			"eu-central": "Avrupa :flag_eu:",
			"singapore": "Singapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Japonya :flag_jp:",
			"russia": "Rusya :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brezilya :flag_br:",
			"singapore": "Singapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "G�ney Afrika :flag_za:"
	}
	let kur = {
			"01": "Ocak",
			"02": "�ubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "May�s",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "A�ustos",
			"09": "Eyl�l",
			"10": "Ekim",
			"11": "Kas�m",
			"12": "Aral�k"
	}
	const embed = new Discord.RichEmbed()
		.setAuthor(`${message.guild.name} | Sunucunun Bilgileri`)
		.addField('Sunucu Kurucusu', `${message.guild.owner} ??`)
		.addField('Sunucu ID', message.guild.id)
		.addField('Olu�turulma Tarihi', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
		.addField('Sunucu Kurulum Konumu', region[message.guild.region])
		.addField(`Kanallar [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Yaz� | ${message.guild.channels.filter(c => c.type === "voice").size} Ses | ${message.guild.channels.filter(c => c.type === 'category').size} Kategori`)
		.addField(`Kullan�c�lar [${message.guild.members.size}]`, `${message.guild.members.filter(m => m.user.presence.status === "online").size} �evrimi�i | ${message.guild.members.filter(m => m.user.presence.status === "offline").size} �evrimd��� | ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahats�z Etmeyin | ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Bo�ta | ${message.guild.members.filter(m => m.user.bot).size} Bot`)
		.addField('AFK Kanal�', message.guild.afkChannel || 'Bulunmuyor')
		.addField('AFK Zaman A��m�', `${message.guild.afkTimeout} saniye`)
		.addField(`Emoji Say�s� [${message.guild.emojis.size}]`, `${loglar.prefix}emojiler yazarak sunucudaki b�t�n emojileri g�r�nt�leyebilirsiniz.`)
		.addField(`Rol Say�s� [${message.guild.roles.size - 1}]`, `${loglar.prefix}roller yazarak sunucudaki b�t�n rolleri g�r�nt�leyebilirsiniz.`)
		.setThumbnail(message.guild.iconURL)
		.setColor(0x00ffff)
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sunucu-bilgi', 'sunucubilgi'],
	permLevel: 0,
	kategori: 'kullan�c�'
}

exports.help = {
	name: 'sunucu',
	description: 'Bulundu�un sunucu hakk�nda bilgi verir.',
	usage: 'gelismissunucubilgi'
}