// Print an inverted right-angle triangle

// *****
// ****
// ***
// **
// *

for (let row = 5; row >= 1; row--) {
    let str = "";
    for (let col = 1; col <= row; col++) {
        str +="*"; 
    }
    console.log(str); 
}