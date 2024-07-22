/*
1. Create 3 different variables for each of the "vault codes."
2. Create a popup dialog that displays a message, and the vault combination.
3. Add comments throughout the code to explain the process.
*/

/* The following three variables define the numbers for the vault code*/
let str1 = 5 + 5
let str2 = 20 * 2
let str3 = 40 -1
/*the following variable combines all three previous variables into one string*/
let strAll = `${str1}, ${str2}, ${str3}`
/*the following alert will make both the message, and code appear in a pop-up*/
alert("You have received this message because you have been chosen to open an important vault. Here is the secret combination: " + strAll)
