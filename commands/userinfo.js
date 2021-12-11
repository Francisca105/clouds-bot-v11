const { RichEmbed } = require("discord.js")
const moment = require('moment')
module.exports = {
    help: {
        name: "userinfo",
        aliases: ["uinfo", "memberinfo"]
    },
    run: async (client, message) => {
        let user = message.mentions.members.first() || message.member;

        let uEmbed = new RichEmbed()
        .setColor(`#dbb107`)
        .setTitle("Informações do usuário")
        .setThumbnail(user.user.displayAvatarURL)
        .addField(":heart: Nome", user.user.username, true)
        .addField(":star2: Nome + Tag", user.user.tag, true)
        .addField(":key: Id", user.id, true)
        .addField(":bookmark_tabs: Avatar", user.user.avatarURL, true)
        .addField(":calendar_spiral: Conta criada a...", moment(user.user.createdAt).format('LLLL'), true)
        .addField(":video_game: Status", user.user.presence.game || 'Nenhum', true)
        .addField(':school_satchel: Roles', user.roles.map(r => `${r}`).join(', '), true)
          

    message.channel.send(uEmbed);

    }
}