function Largest(arr) {
    let largestEl = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestEl) {
            largestEl = arr[i];
        }
    }
    return largestEl;
}
let arr = [20, 50, 5465, 584, 565, 6];
console.log(Largest(arr));