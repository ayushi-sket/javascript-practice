const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

console.log(sum(10, 20, 30));