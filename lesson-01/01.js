// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
let counter = 0;

while (counter < 20) {
    sum = sum + counter + 1;
    counter += 1;
}

console.log(sum);