function isEven(num) {
    return num % 2 === 0;
}

// function kebabToSnake() {
//     var str = "hello-world";
//     var res = str.replace("-", "_");
//     return res;
// }

function kebabToSnake(double) {
    var res = double.replace(/-/g, "_");
    return res;
}

function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}