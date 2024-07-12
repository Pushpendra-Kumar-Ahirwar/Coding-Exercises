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

function GCD(a, b) {
    let result = Math.max(a, b);
    // console.log(result)
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            // console.log(result, a)
            // console.log(result, b)
            break;
        }
        result--;
    }
    return result;
}

const main = async() => {
    let a = parseInt(await takeInput("Enter the value of a: "));
    let b = parseInt(await takeInput("Enter value of b: "));
    console.log(GCD(a, b));
    rl.close();
};
main();