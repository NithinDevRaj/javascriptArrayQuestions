// // Biggest and Largest palindrome

// let word = "manu mmm learning malayalam in mmmm abcdcba wwwwwww"

// let Largest = ""
// let smallest = ""
// const split = word.split(' ')

// for (let i = 0; i < split.length; i++) {
//     if (split[i] === split[i].split('').reverse().join('')) {
//         if (split[i].length > Largest.length) {
//             if (Largest.length < smallest.length || !smallest) {
//                 smallest = Largest
//             }
//             Largest = split[i]
//         }
//         if (split[i].length < smallest.length || !smallest) {
//             smallest = split[i]
//         }
//     }
// }

// console.log("largest", Largest)
// console.log("smalles", smallest)


// const string = 'naseef'
// result = ""

// function stringChange(string, i = string.length - 1) {
//     if (i < 0) {
//         return result
//     }
//     result += string[i]
//     return stringChange(string, i - 1)

// }
// stringChange(string)
// console.log(result)


// let letters = "AaBbc";
// let newLetter = '';

// for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === letters[i].toUpperCase()) {
//         newLetter += letters[i].toLowerCase();
//     } else {
//         newLetter += letters[i].toUpperCase();
//     }
// }

// console.log(newLetter);
function camelize(str) {
    return str.split(' ').map((word, index) => {
        if (index === 0) {
            // Convert the first word to lowercase
            return word.toLowerCase();
        } else {
            // Capitalize the first letter of each subsequent word
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }).join('');
}
 
console.log(camelize('Nithin raj'));



