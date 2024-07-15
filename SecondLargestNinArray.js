function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];

        }
    }
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i]

        }
    }
    return secondLargest
}


let arr = [20, 5, 8, 6, 82, 55, 81]
console.log(secondLargest((arr)))