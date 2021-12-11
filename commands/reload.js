exports.run = async (client, message, args, err) => {
    const {dona} = require('../config.json')
    const discord = require('discord.js')
    if(message.author.id !== dona) return message.reply(' não tens permissão para usar este comando!')
    let cmdname = args[0]
    let cmdTLC = cmdname.toLowerCase()

    if(!cmdname) return message.reply('indica o comando para recarregar!')
    
    try {
        delete require.cache[require.resolve(`./${cmdTLC}.js`)]
        client.commands.delete(cmdTLC)
        const pull = require(`./${cmdTLC}.js`)
        client.commands.set(cmdTLC, pull)

    } catch(e) {
        return message.channel.send(`Não consegui carregar esse comando (\`${cmdTLC}\`)!`), console.log('ERRO: \n' + e)
    }

    message.channel.send(`O comando \`${cmdTLC}\` foi recarregado com sucesso!`)

}
module.exports.help = {
    name: "reload",
    aliases: ["rl"]
}   