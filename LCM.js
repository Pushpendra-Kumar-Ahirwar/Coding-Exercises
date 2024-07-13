function LCM(a, b) {
    let lcm = a > b ? a : b;
    while (true) {
        if (lcm % a == 0 && lcm % b == 0) {
            break;
        }
        lcm++;
    }
    return lcm;
}

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
    let number1 = parseInt(await takeInput("Enter the number1: "));
    let number2 = parseInt(await takeInput("Enter the number2: "));
    const result = LCM(number1, number2);
    console.log(`LCM of ${number1} and ${number2} is: ${result}`);
    rl.close();
};
main();