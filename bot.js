console.clear()

const Client = require("./Structures/Client.js")

require("dotenv").config()

const client = new Client()

client.start(process.env.BOT_TOKEN)
