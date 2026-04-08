// Function to solve Roll-Seed Lock
function solveRollSeedLock() {
    // Taking inputs
    let N = parseInt(prompt("Enter integer N:"));
    let seed = parseInt(prompt("Enter student's seed value:"));

    let current = N;

    // Repeat exactly 3 times
    for (let i = 0; i < 3; i++) {
        if (current % 2 === 0) {
            // If even: replace with current / 2 + seed
            current = (current / 2) + seed;
        } else {
            // Otherwise: replace with current * 3 - seed
            current = (current * 3) - seed;
        }
    }

    // Condition 1: Number is between 100 and 999 inclusive
    let isThreeDigits = (current >= 100 && current <= 999);

    // Condition 2: Middle digit is equal to seed
    // (Only calculate if it's a 3-digit number to avoid logic errors)
    let middleDigit = Math.floor(current / 10) % 10;
    let isMiddleMatch = (middleDigit === seed);

    // Final Output
    if (isThreeDigits && isMiddleMatch) {
        alert("YES");
    } else {
        alert("NO");
    }
}

// Execute the function
solveRollSeedLock();