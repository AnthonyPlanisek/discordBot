const Command = require("../Structures/Command")

const Discord = require("discord.js")

module.exports = new Command ({
    name: "embed",
    description: "shows an embed",
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed()

        embed
        .setTitle("test title")
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setDescription("example description")
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setImage("https://i.redd.it/wxn9rj5c3kq71.jpg")
        .addFields(
        {
            name: "Bot Version",
            value: "1.0.0",
            inline: true
        }, 
        {
            name: "Bot Name",
            value: client.user.username,
            inline: true
        })


        message.channel.send({ embeds: [embed] })
    }
})