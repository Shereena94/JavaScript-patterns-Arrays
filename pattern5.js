// print the following pattern

// *****
// *   *
// *   *
// *   *
// *****

// JavaScript program to print the hollow rectangle pattern
let rows = 5;  // Number of rows
let cols = 5;  // Number of columns

for (let i = 1; i <= rows; i++) { // Outer loop for rows
    let row = ""; // Initialize an empty string for each row
    for (let j = 1; j <= cols; j++) { // Inner loop for columns
        if (i === 1 || i === rows || j === 1 || j === cols) {
            row += "*"; // Add '*' for the border
        } else {
            row += " "; // Add space for the hollow part
        }
    }
    console.log(row); // Print the constructed row
}

