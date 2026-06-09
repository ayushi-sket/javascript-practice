// Example 1: Basic Callback

function greet(callback) {
    console.log("Hello");
    callback();
}

function sayBye() {
    console.log("Bye");
}

greet(sayBye);


// Example 2: Callback with Parameter

function welcome(name, callback) {
    callback(name);
}

function displayName(name) {
    console.log("Welcome " + name);
}

welcome("Ayushi", displayName);


// Example 3: Callback with setTimeout

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);