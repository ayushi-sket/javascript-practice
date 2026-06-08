const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num));

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const even = numbers.filter(num => num % 2 === 0);
console.log(even);

const found = numbers.find(num => num > 3);
console.log(found);