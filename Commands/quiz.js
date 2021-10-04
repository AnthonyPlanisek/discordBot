const { MessageReaction } = require("discord.js")
const Command = require("../Structures/Command")

module.exports = new Command ({
    name: "quiz",
    description: "quiz game",

    async run(message, args, client, channel) {
        this.channel = channel
        message.reply('confirm')
        message.react("❤")

        // const filter = (reaction) => {
        //     return reaction.author.id == message.author.id
        // }
        // const collector = message.channel.createMessageCollector({
        //     filter,
        //     max: 1,
        //     time: 1000 * 5
        // })

        const filter = (reaction, user) => {
            return user.id === message.author.id
        }

        const collector = message.createReactionCollector({
            filter,
            max: 1,
            time: 1000 * 5
        })

        collector.on("collect", reaction => {
            console.log(reaction.emoji)
        })

        collector.on("end", collected => {
            if (collected.size === 0) {
                message.reply('you did not react in time')
                return
            }

            let text = "Collected:\n\n"

            collected.forEach((message) => {
                text += `${message.emoji.name}\n`
            })

            message.channel.send(text)

        })



    }
})