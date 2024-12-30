// WAP print the following pattern using nested loops:
// 1
// 22
// 333
// 4444
// 55555



for (let i = 1; i <= 5; i++) { // Outer loop for rows
    let row = ""; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) { // Inner loop for columns
        row += i; // Append the current number 'i'
    }
    console.log(row); // Print the row after inner loop completes
}