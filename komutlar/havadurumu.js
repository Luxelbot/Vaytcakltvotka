const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription("Bir �ehir yaz!")
            .setColor("RANDOM")
        message.channel.send({embed})
        return
    }

    const konum = args.join(" ")
    message.channel.send("", {
        files: [
            `http://wttr.in/${konum}_0tqp_lang=tr.png`
        ]
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hava', 'hava-durumu', 'havabilgisi', 'hava-bilgisi', 'weather', 'weatherforecast'],
    permLevel: 0
}

exports.help = {
    name: 'havadurumu',
    description: 'Yaz�lan konumun hava durumu bilgisini g�sterir.',
    usage: 'havadurumu <konum>'
}