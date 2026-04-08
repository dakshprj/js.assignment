/**
 * Contest Score Judge
 * Calculates a student's score based on correct, partially correct, 
 * and wrong answers, then applies ranking/status rules.
 */

function solveContestScore() {
    // 1. Take inputs for a, b, and c
    let a = parseInt(prompt("Enter number of correct answers (a):"));
    let b = parseInt(prompt("Enter number of partially correct answers (b):"));
    let c = parseInt(prompt("Enter number of wrong answers (c):"));

    // 2. Compute the score using the formula: score = 3a + b - 2c
    let score = (3 * a) + b - (2 * c);

    // 3. Apply rules (Generic implementation based on standard logic)
    // You can replace these with the specific rules from your text.
    let status = "";
    
    if (score >= 20) {
        status = "Excellent";
    } else if (score >= 10) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    // 4. Output the results
    alert("Computed Score: " + score + "\nResult: " + status);
}

// Execute the function
solveContestScore();