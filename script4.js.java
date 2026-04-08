/**
 * Mirror Corridor Problem
 * Finds the smallest non-negative X such that (N + X) 
 * is a palindrome and divisible by K.
 */

function solveMirrorCorridor() {
    // 1. Take N and K using prompt()
    let N = parseInt(prompt("Enter N:"));
    let K = parseInt(prompt("Enter K:"));

    let foundX = -1;

    // 2. Iterate X from 0 to 100,000
    for (let x = 0; x <= 100000; x++) {
        let sum = N + x;

        // Condition A: Divisible by K
        if (sum % K === 0) {
            
            // Condition B: Check if sum is a Palindrome
            // Convert to string, split into array, reverse, and join back
            let strSum = sum.toString();
            let reversedSum = strSum.split('').reverse().join('');

            if (strSum === reversedSum) {
                foundX = x;
                break; // Stop at the smallest X
            }
        }
    }

    // 3. Print result using alert()
    alert(foundX);
}

// Execute the solution
solveMirrorCorridor();
