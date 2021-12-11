exports.run = async (client, message, args) => {
    const discord = require('discord.js')
    const db = require('../database/database.js')
    const Warns = require('../models/Warns.js')
    let avisar =  message.mentions.members.first() || message.guild.members.get(args[2]) 
    let ver = args[0] === 'ver'
    let add = args[0] === 'add'
    let remove = args[0] === 'remove'
    let resetar = args[0] === 'resetar'

    if(!args[0]){
        return message.reply('Para executar este comando faça: \`/warn ver|add|remove|resetar\`')
    }
    else{
        if(!avisar) return message.reply('Menciona um usuário!')
    }

    let find_user = await Warns.findOne({
        where: {
            user: avisar.id
        }
    })

    if(ver){
        if(find_user) {
            let avisos = find_user.warns
            message.reply('O usuário tem \`'+ avisos+ '\` warns!')
        } else {
            return message.reply('O usuário tem \`0\` warns!')
        }
    } else if(add) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')

        if(find_user){
            const addwarns = find_user.increment('warns', { by: 1 })
            addwarns
            message.reply('Warn adicionado com sucesso!')
        let avisosa = find_user.warns
        if(avisosa >= 3) message.reply('O usuário tem mais do que 2 avisos!')
        }else{
            let criarwarn = Warns.create({
                user: avisar.id,
                warns: 1
        })
        criarwarn
        message.reply('Warn adicionado com sucesso!')
        

    }} else if(remove) {
        if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')
        if(find_user){
            let avisosr = find_user.warns
            if(avisosr <= 0) return message.reply('Não podes retirar mais nenhum aviso!')

            else {       
                const removewarns = find_user.increment('warns', { by: -1 })
                removewarns
                message.reply('Warn removido com sucesso!')
        }
    }else{
    message.reply('Esse usuário não possui warns para retirar.')
}}else if(resetar) {
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')

    if(find_user){
        find_user.destroy()
        message.reply('Os warns do usuário foram resetados.')
    }else{
    message.reply('Esse usuário não possui warns para resetar.')
}} if(!ver && !add && !remove && !resetar){
    message.reply('Para executar este comando faça: \`/warn ver|add|remove|resetar\`')
}

    }
    module.exports.help = {
        name: "warn",
        aliases: ["warns"]
    }    