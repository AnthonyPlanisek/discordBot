console.clear()

const Client = require("./Structures/Client.js")

require("dotenv").config()

const config = require("./Data/config.json")

const client = new Client()

client.start(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log('bot is online!!')
})

client.on("messageCreate", message => {
    // console.log(message.content)
    if (!message.content.startsWith(config.prefix)) return

    const args = message.content.substring(config.prefix.length).split(/ +/)

    const command = client.commands.find(cmd => cmd.name == args[0])

    if (!command) return message.reply(`${args[0]} is not a valid command!`)

    command.run(message, args, client)

})
