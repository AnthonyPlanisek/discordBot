const Command = require("../Structures/Command")
const { GuessThePokemon } = require('weky');
module.exports = new Command ({
    name: "pokemon",
    description: "asks questions",

    async run(message, args, client) {
        await GuessThePokemon({
            message: message,
            embed: {
                title: 'Guess The Pokémon | Weky Development',
                description:
                    '**Type:**\n{{type}}\n\n**Abilities:**\n{{abilities}}\n\nYou only have **{{time}}** to guess the pokémon.',
                color: '#5865F2',
                footer: '©️ Weky Development',
                timestamp: true
            },
            thinkMessage: 'I am thinking',
            othersMessage: 'Only <@{{author}}> can use the buttons!',
            winMessage:
                'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
            loseMessage: 'Better luck next time! It was a **{{answer}}**.',
            time: 60000,
            incorrectMessage: "No {{author}}! The pokémon isn't `{{answer}}`",
            buttonText: 'Cancel'
        });
        
    }
})

