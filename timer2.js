const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const beep = (() => process.stdout.write('\x07'));
const onExit = (() => {
  console.log("\nThanks for using me, ciao!");
  process.exit()
})

const userInput = function() {
  rl.question("Press 'b' to get a beep immediately or enter a number between 1 and 9 to set an alarm! ", (input) => {
    console.log(input);

    rl.on('SIGINT', () => onExit());

    if (input === 'b') {
      beep();
    };

    if (input >= 1 && input <= 9) {
      console.log(`Setting timer for ${input} second(s)...`);
      setTimeout(() => {
        beep();
      }, input * 1000);
    }

    userInput();

  });
};

userInput();