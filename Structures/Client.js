const Discord = require("discord.js")

const Command = require("./Command.js")

const intents = new Discord.Intents(32767)

const fs = require("fs")

class Client extends Discord.Client {
    constructor() {
        super({ intents })

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection()
    }

    start(token) {

        fs.readdirSync("./Commands")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {

            /**
            * @type {Command}
            */
            const command = require(`../Commands/${file}`)
            console.log(`Command ${command.name} loaded`)
            this.commands.set(command.name, command)

        })
        this.login(token)
    }
}

module.exports = Client