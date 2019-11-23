const Discord = require('discord.js')

exports.run = (client, message, args) => {
	let region = {
			"us-central": "Amerika :flag_us:",
			"us-east": "Doðu Amerika :flag_us:",
			"us-south": "Güney Amerika :flag_us:",
			"us-west": "Batý Amerika :flag_us:",
			"eu-west": "Batý Avrupa :flag_eu:",
			"eu-central": "Avrupa :flag_eu:",
			"singapore": "Singapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Japonya :flag_jp:",
			"russia": "Rusya :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brezilya :flag_br:",
			"singapore": "Singapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "Güney Afrika :flag_za:"
	}
	let kur = {
			"01": "Ocak",
			"02": "Þubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayýs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Aðustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasým",
			"12": "Aralýk"
	}
	const embed = new Discord.RichEmbed()
		.setAuthor(`${message.guild.name} | Sunucunun Bilgileri`)
		.addField('Sunucu Kurucusu', `${message.guild.owner} ??`)
		.addField('Sunucu ID', message.guild.id)
		.addField('Oluþturulma Tarihi', `${moment(message.guild.createdAt).format('DD')} ${kur[moment(message.guild.createdAt).format('MM')]} ${moment(message.guild.createdAt).format('YYYY h:mm:ss')}`)
		.addField('Sunucu Kurulum Konumu', region[message.guild.region])
		.addField(`Kanallar [${message.guild.channels.size}]`, `${message.guild.channels.filter(c => c.type === "text").size} Yazý | ${message.guild.channels.filter(c => c.type === "voice").size} Ses | ${message.guild.channels.filter(c => c.type === 'category').size} Kategori`)
		.addField(`Kullanýcýlar [${message.guild.members.size}]`, `${message.guild.members.filter(m => m.user.presence.status === "online").size} Çevrimiçi | ${message.guild.members.filter(m => m.user.presence.status === "offline").size} Çevrimdýþý | ${message.guild.members.filter(m => m.user.presence.status === "dnd").size} Rahatsýz Etmeyin | ${message.guild.members.filter(m => m.user.presence.status === "idle").size} Boþta | ${message.guild.members.filter(m => m.user.bot).size} Bot`)
		.addField('AFK Kanalý', message.guild.afkChannel || 'Bulunmuyor')
		.addField('AFK Zaman Aþýmý', `${message.guild.afkTimeout} saniye`)
		.addField(`Emoji Sayýsý [${message.guild.emojis.size}]`, `${loglar.prefix}emojiler yazarak sunucudaki bütün emojileri görüntüleyebilirsiniz.`)
		.addField(`Rol Sayýsý [${message.guild.roles.size - 1}]`, `${loglar.prefix}roller yazarak sunucudaki bütün rolleri görüntüleyebilirsiniz.`)
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
	kategori: 'kullanýcý'
}

exports.help = {
	name: 'sunucu',
	description: 'Bulunduðun sunucu hakkýnda bilgi verir.',
	usage: 'gelismissunucubilgi'
}