// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Taking inputs using prompt()
let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

let count = 0;

for (let x = L; x <= R; x++) {
    // 1. Check if x is divisible by K
    if (x % K === 0) {
        let strX = x.toString();

        // 2. Check if x does not contain the digit 0
        if (!strX.includes('0')) {
            
            // 3. Calculate sum of digits
            let sumDigits = 0;
            for (let char of strX) {
                sumDigits += parseInt(char);
            }

            // 4. Check if the sum of digits is a prime number
            if (isPrime(sumDigits)) {
                count++;
            }
        }
    }
}

// Display the result using alert()
alert(count);