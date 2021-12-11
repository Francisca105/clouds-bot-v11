exports.run = async (client, message) => {
    const Discord = require('discord.js')
    const moment = require("moment") 
    moment.locale('pt');
  
        const a = await message.channel.send("A carregar o menu de informações...");   
        function duration(ms) {
            const sec = Math.floor((ms / 1000) % 60).toString()
            const min = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} dias, ${hrs.padStart(2, '0')} horas, ${min.padStart(2, '0')} minutos, ${sec.padStart(2, '0')} segundos.`
        }

        

    
        let embed1 = new Discord.RichEmbed()
        .setAuthor('Informações do bot', client.user.avtarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor('#f4ff21')
        .setDescription('Olá! Tudo bem?\nComo pedido aqui estão todas as minhas informações!')
        .addField('Criadora', 'Francisca.105#8965',true)
        .addField('Ping', `${a.createdTimestamp - message.createdTimestamp} ms`,true)
        .addField('Ping do Bot', `${Math.round(client.ping)} ms.`,true)
        .addField('Uptime', `${duration(client.uptime)}`,true)


        
        a.edit(embed1);

    }
    
    module.exports.help = {
        name: "botinfo",
        aliases: ["bot", "infobot"]
    }    