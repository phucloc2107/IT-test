// Problem 2: Advanced Palindrome Check
// Write a function that checks whether a given string is a palindrome, considering only
// alphanumeric characters and ignoring cases. Additionally, the function should handle
// Unicode characters properly.
//
// Example:
// Input: "A man, a plan, a canal, Panamá";
// Output: True

function PalindromeCheck(s) {
    // Normalize the Unicode string to NFD form and remove diacritical marks
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

let inputString = "A man, a plan, a canal, Panamá"
console.log(PalindromeCheck(inputString));

