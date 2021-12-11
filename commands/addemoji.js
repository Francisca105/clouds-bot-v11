const discord = require("discord.js")

module.exports.run = async (client,message,args) => {

    if(!message.member.hasPermission("MANAGE_EMOJIS")) {
        message.reply(`Não tens a permissão de \`gerir emojis\` para adicionares o emoji.`)
    }else if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) {
        message.reply(`Não tenho a permissão de \`gerir emojis\` para adicionares o emoji.`)
    }else if(!args[0]) {
        message.reply('Insira o nome emoji que deseja adicionar.')
    }else if(!args[1]) { 
        message.reply('Insira o link do emoji que seja adicionar.')
    }else {
        try {
    
            message.guild.createEmoji(args[1], args[0]).then(e => {
            message.channel.send(`${e} Emoji aicionado com sucesso com o nome: \`${args[0]}\``)

           
            })
        
    }catch(e) {
        message.channel.send(`Erro encontrado!\n \`${e}\``)
    }
}
}


module.exports.help = {
  name: 'addemoji',
  aliases: ['emojiadd']
}