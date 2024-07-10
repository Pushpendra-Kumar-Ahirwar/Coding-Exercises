const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const takeInput = (input) => {
    return new Promise((resolve) => {
        rl.question(input, (output) => {
            resolve(output);
        });
    });
};

const main = async() => {
    let number = parseInt(await takeInput("Enter the Number: "));
    let sum = 0;
    while (number > 0) {
        sum = sum + (number % 10);
        number = parseInt(number / 10);
    }
    console.log("sum of given digits is :", parseInt(sum));
    rl.close();
};

main();