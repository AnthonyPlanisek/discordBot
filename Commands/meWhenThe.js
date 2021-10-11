const Command = require("../Structures/Command")

module.exports = new Command({
    name: "mewhenthe",
    description: "Says me when the",

    async run(message, args, client) {

        message.reply(MeWhenThe())
        
    }
})

function MeWhenThe(){
    let amount = Math.round(Math.random() * 20);
    console.log(amount);
    let printString = "Me when the";
    let lastNum = 2;
    let secondLastNum = 1;
    let thirdLastNum = 0;
    for (let i = 0; i < amount; i++){
        temp = Math.round(Math.random() * 5);
        while((lastNum == secondLastNum && lastNum == temp) 
            ||(thirdLastNum == secondLastNum && lastNum == temp))
        {
            temp = Math.round(Math.random() * 5);
            console.log(temp)
        }
        thirdLastNum = secondLastNum;
        secondLastNum = lastNum;
        lastNum = temp;

        if(temp == 0){
            printString += " me the when";
        } else if(temp == 1){
            printString += " when me the";
        } else if(temp == 2){
            printString += " the me when";
        } else if(temp == 3){
            printString += " me when the";
        } else if(temp == 4){
            printString += " when the me";
        } else if(temp == 5){
            printString += " the when me";
        }
    }
    return printString;
}

