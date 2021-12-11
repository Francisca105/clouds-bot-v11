exports.run = (client, message, args, err) => {
    message.delete()
    let channelID = message.channel.id
    let emoji = args[0]
    let nome = args[1]

    if(!emoji) return message.reply('indique um emoji.').then(f => f.delete(5000))
    if(!nome) return message.reply('indique o nome do canal.').then(e => e.delete(5000))

    client.channels.get(channelID).setName(`【${emoji}】${nome}`);
    message.channel.send('Canal atualizado com sucesso!').then(m => m.delete(1500))
}
module.exports.help = {
    name: "setname",
    aliases: ["setchannelname"]
}