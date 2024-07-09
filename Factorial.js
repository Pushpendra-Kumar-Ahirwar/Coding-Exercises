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
    let number = parseInt(await takeInput("Enter the number: "));
    let temp = number;
    let fact = 1;
    if (number < 0) {
        console.log("Negative Intiger don't have factorial");
    } else {
        while (number > 1) {
            fact = fact * number;
            number = number - 1;
        }
        console.log(`factorial of ${temp} is ${fact}`);
    }
    rl.close();
};
main();