const numbers = [10, 20, 30, 40, 50];

// forEach
numbers.forEach(num => {
    console.log(num);
});

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
const greaterThanTwenty = numbers.filter(num => num > 20);
console.log(greaterThanTwenty);

// find
const found = numbers.find(num => num === 30);
console.log(found);

// reduce
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);