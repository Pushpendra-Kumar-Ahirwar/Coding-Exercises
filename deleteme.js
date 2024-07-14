const dataTypes = {
    myNumber: 42,
    myString: "Hello, world!",
    myBoolean: true,
    myNull: null,
    myUndefined: undefined,
    myArray: [1, 2, 3],
    myFunction: function() { console.log("This is a function"); }
};

for (const key in dataTypes) {
    const value = dataTypes[key];
    console.log(`Key: ${key}, Value: ${value}, Type: ${typeof value}`);
}