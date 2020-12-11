
// Defining the variables for each of the elements
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var characters = "~!@#$%^&*()_+:?><;[]=-".split("");

// Creating an array to hold the password and an array to store the variables of password in a pool
function generatePassword() {
    var password = [];
    var pool = [];

// Ask user to enter password length

    var passLength = prompt("Please choose a password character length, between 7 - 128"); 
    passLength = parseInt(passLength); 

// If user has entered less than 8 or more than 128 characters an alert pops up asking to keep it within those parameters

    if (passLength < 8) {
        alert("Password must have more than 7 characters");
        return "";
    }
    if (passLength > 128) {
        alert("Password must not have more than 128 characters");
        return "";
    }

// Inquiring if the user would like lowercase, numbers, upper case, and special characters

    var useLowercase = confirm("Do you want LOWERCASE LETTERS in your password's life?");

    var useNumbers = confirm("Need some NUMBERS to keep things REAL secure?");

    var useUppercase = confirm("How about some sumptuous UPPER CASE letters to spice up your password?")

    var useCharacter = confirm("Do you want EVEN MORE security with SPECIAL CHARACTERS?")

// If user has picked each of the options, pool them and copy to store each option in the pool as a whole (characters, uppercase, numbers and lowercase)

    if (useLowercase) {
        pool = pool.concat(lowercase);
    }
    if (useUppercase) {
      pool = pool.concat(uppercase);
  }
    if (useNumbers) {
        pool = pool.concat(numbers);
    }
    if (useCharacter) {
      pool = pool.concat(characters);
  }

// Generate a random password based on the pool and randomization of characters and numbers

    for (var i = 0; i < passLength; i++) {
        var randomChar = pool[Math.floor(Math.random() * pool.length)];
        password.push(randomChar);
    }

// Add to the end of the password space and returning to join all the components
    return password.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate the button for creating a password
generateBtn.addEventListener("click", writePassword);



// If I click the button to generate a new password, present a series of prompts for password criteria
// If prompt comes up for password criteria, select criteria to include in password
// If prompt comes up for length of password, choose a length of at least 8 characters and no more than 128.
// If prompt comes up for character types to include in password, choose lowercase, uppercase, numeric, and/or special characters
// If I answer every prompt, input is validated and at least one character type should select
// If all prompts answered, password generates that matches criteria
//If password is generated, displayed in alert or written to page.


