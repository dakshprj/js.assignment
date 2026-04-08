/**
 * Skipping Numbers
 * Finds the smallest m where the sum of numbers 1 to m 
 * (excluding multiples of seed + 2) is at least N.
 */

function solveSkippingNumbers() {
    // 1. Take inputs
    let N = parseInt(prompt("Enter N (Target Sum):"));
    let seed = parseInt(prompt("Enter seed:"));

    let divisor = seed + 2;
    let currentSum = 0;
    let m = 0;

    // 2. Loop until currentSum reaches or exceeds N
    while (currentSum < N) {
        m++; // Increment m first to start from 1
        
        // Check if m is NOT divisible by (seed + 2)
        if (m % divisor !== 0) {
            currentSum += m;
        }
    }

    // 3. Print both the value of m and the computed sum
    console.log("Value of m:", m);
    console.log("Computed sum:", currentSum);
    
    // Using alert for display as per previous patterns
    alert("m: " + m + "\nSum: " + currentSum);
}

// Execute the function
solveSkippingNumbers();