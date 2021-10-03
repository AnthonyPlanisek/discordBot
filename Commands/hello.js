const Command = require("../Structures/Command")

module.exports = new Command({
    name: "hello",
    description: "Says hello back",

    async run(message, args, client) {

        message.reply("Hello")
        
    }
})