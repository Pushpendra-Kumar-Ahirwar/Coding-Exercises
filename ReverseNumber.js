const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const takeInput = async(input) => {
    return new Promise((resolve) => {
        rl.question(input, (output) => {
            resolve(output);
        });
    });
};

const main = async() => {
    let number = parseInt(await takeInput("Enter the Number: "));
    let reversenumber = 0;
    while (number > 0) {
        reversenumber = reversenumber * 10 + (number % 10);
        number = parseInt(number / 10);
    }

    console.log("Reverse Number is: ", reversenumber);
    rl.close();
};
main();