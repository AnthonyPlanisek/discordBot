console.clear()

const Client = require("./Structures/Client.js")

require("dotenv").config()

const config = require("./Data/config.json")

const client = new Client()

const fs = require("fs")

const Command = require("./Structures/Command.js")

fs.readdirSync("./Commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {

        /**
         * @type {Command}
         */
        const command = require(`./Commands/${file}`)
        console.log(`Command ${command.name} loaded`)
        client.commands.set(command.name, command)

})

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

    // switch(args[0]) {
    //     case "hello":
    //         message.reply("Hello!")

    //         break;
        
    //     case "say":
    //         message.reply(args.slice(1).join(" "))

    //         break;
        
    //     default:
    //         console.log('broke')
    // }
})

client.login(process.env.BOT_TOKEN)