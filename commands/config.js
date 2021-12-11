exports.run = (client, message, args, err) => {
    const discord = require('discord.js')
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')

    let array = ["nome", "avatar"]
    let name = args[0] === 'nome'
    let avatar = args[0] === 'avatar'

    if(name){
        let nick = args.slice(1).join(' ')
        if(!nick) return message.channel.send('Indique o novo nome do bot!')
        else {
            return message.channel.send('Novo nome colocado com sucesso!'),
            client.user.setUsername(nick)
        }
        
    }
    if(avatar){
        let link = args[1]
        if(!link) return message.reply('Indique o link para o novo avatar!')
        else {
            return client.user.setAvatar(link),
            message.channel.send('Novo avatar colocado!')
        }
        
    } if(!avatar && !name) {
        return message.channel.send('Todos os meus subcomandos disponíveis:\n \`' + array.join(', ') + '\`')
    }
}
module.exports.help = {
    name: "serverinfo",
    aliases: ["discord", "servidorinfo", "svinfo"]
}