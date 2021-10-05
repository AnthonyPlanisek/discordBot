const Command = require("../Structures/Command")

module.exports = new Command({
    name: "gosu",
    description: "says gosu",

    async run(message, args, client) {

        message.reply(Gosu())
        
    }
})

function Gosu(){
    let retString;
    let temp = Math.random() * 100;
    if(temp >= 90) {
        retString = "Kawakami poggies"
    } else if ( temp <= 10){
        retString = "Gosu smells"
    }
    else {
        retString = "Gosu"
    }

    return retString;
}