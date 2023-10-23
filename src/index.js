module.exports = function reverse (n) {
    let result = '';
    if (n < 0) {
        n *= -1;
    }
    while (n > 0) {
      result += Math.floor(n % 10);
      n = Math.floor(n / 10);
    }
    return result;
}