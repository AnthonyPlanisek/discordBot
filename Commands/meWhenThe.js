const Command = require("../Structures/Command")

module.exports = new Command({
    name: "mewhenthe",
    description: "Says me when the",

    async run(message, args, client) {

        message.reply(MeWhenThe(args[0]))
        
    }
})

function MeWhenThe(amount){
    let stringToPrint = "Me when the"
    for (let i = 0; i < amount; i++){
        temp = Math.random * 3;
        if(temp == 0){
            printString += " me";
        } else if(temp == 1){
            printString += " when";
        } else if(temp == 2){
            printString += " the";
        }
    }
    return stringToPrint;
}
