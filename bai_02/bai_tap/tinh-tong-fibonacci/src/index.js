// happy coding 👻
function fibonacci(n) {
    if (n <= 1)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
var sum = 0;
for (var i = 1; i <= 30; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log(sum);
