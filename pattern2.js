// WAP to print the following pattern

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2
// 1

// JavaScript program to print the given pattern
for (let i = 5; i >= 1; i--) { // Outer loop for rows, starting from 5 down to 1
    let row = ""; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) { // Inner loop for numbers in each row
        row += j + " "; // Append the current number followed by a space
    }
    console.log(row.trim()); // Print the row, trimmed to remove trailing spaces
}