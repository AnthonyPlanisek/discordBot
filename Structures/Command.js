const Discord = require("discord.js")
const Client = require("./Client.js")

/**
 * 
 * @param {Discord.Message} message 
 * @param {string[]} args 
 * @param {Client} client 
 */
function RunFunction(message, args, client, channel) {}

class Command {
    /**
     * @typedef {{name: string, description: string, run: RunFuction}} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name
        this.description = options.description
        this.run = options.run
    }
}

module.exports = Command