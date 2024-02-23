function test_prime(n) {
    if (n <= 1) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

let c = 4691
console.log(c + ' is prime number: ' + test_prime(c))