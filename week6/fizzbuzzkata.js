module.exports = (arg) => {
    if (arg === 1) {
        return 1;
    } else if (arg === 2) {
        return 2;
    } else if (arg % 3 === 0 && arg % 5 === 0) {
        return "FizzBuzz";
    } else if (arg % 3 === 0) {
        return "Fizz";
    } else if (arg % 5 === 0) {
        return "Buzz";
    } 
}
