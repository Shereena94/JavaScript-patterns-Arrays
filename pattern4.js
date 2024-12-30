// Print the following pattern

// # # # # # # 
// # # # # # #
// # # # # # #
// # # # # # #
// # # # # # #
// # # # # # #



// JavaScript program to print the given pattern
let rows = 6; // Number of rows
let cols = 6; // Number of columns

for (let i = 1; i <= rows; i++) { // Outer loop for rows
    let row = ""; // Initialize an empty string for each row
    for (let j = 1; j <= cols; j++) { // Inner loop for columns
        row += "# "; // Append a '#' followed by a space
    }
    console.log(row.trim()); // Print the row, removing any trailing space
}