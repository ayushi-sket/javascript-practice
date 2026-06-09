// Promise Resolve

const promise1 = new Promise((resolve, reject) => {
    resolve("Success");
});

promise1.then(result => {
    console.log(result);
});


// Promise Reject

const promise2 = new Promise((resolve, reject) => {
    reject("Error");
});

promise2.catch(error => {
    console.log(error);
});


// Promise Chaining

Promise.resolve(10)
.then(num => num * 2)
.then(num => num + 5)
.then(result => console.log(result));