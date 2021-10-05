const Command = require("../Structures/Command")

module.exports = new Command({
    name: "mewhenthe",
    description: "Says me when the",

    async run(message, args, client) {

        message.reply(MeWhenThe())
        
    }
})

function MeWhenThe(){
    let amount = Math.round(Math.random() * 50);
    console.log(amount);
    let printString = "Me when the";
    let lastNum = 2;
    let secondLastNum = 1;
    let thirdLastNum = 0;
    for (let i = 0; i < amount; i++){
        temp = Math.round(Math.random() * 2);
        while((lastNum == secondLastNum && lastNum == temp) 
            ||(thirdLastNum == secondLastNum && lastNum == temp))
        {
            temp = Math.round(Math.random() * 2);
            console.log(temp)
        }
        thirdLastNum = secondLastNum;
        secondLastNum = lastNum;
        lastNum = temp;

        if(temp == 0){
            printString += " me";
        } else if(temp == 1){
            printString += " when";
        } else if(temp == 2){
            printString += " the";
        }
    }
    return printString;
}

