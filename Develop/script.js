// Assignment code here
function generatePassword() {
  let numChars = prompt("Please enter how many characters you would like your password to have (8-128)");
  
  while (isNaN(numChars) || numChars < 8 || numChars > 128) {
    alert("Please enter a number between 8 and 128");
    numChars = prompt("Please enter how many characters you would like your password to have (8-128)");
  }

  let lowercase = false;
  let uppercase = false;
  let numeric = false;
  let specialChar = false;

  while (!lowercase && !uppercase && !numeric && !specialChar) {
    lowercase = confirm("Include lowercase characters?");
    uppercase = confirm("Include uppercase characters?");
    numeric = confirm("Include numeric characters?");
    specialChar = confirm("Include special characters?");
    if (!lowercase && !uppercase && !numeric && !specialChar) {
      alert("Please select at least one character");
    }
  }

  let newPassword = "";
  let lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericChars = "0123456789";
  let specialCharList = "!#$%&()*+,-./:;<=>?@[]^_{}|~";

  while (newPassword.length < numChars) {
    if (lowercase) {
      newPassword = newPassword.concat(lowercaseAlphabet[Math.floor(Math.random()*lowercaseAlphabet.length)]);
    }

    if (uppercase) {
      newPassword = newPassword.concat(uppercaseAlphabet[Math.floor(Math.random()*uppercaseAlphabet.length)]);
    }

    if (numeric) {
      newPassword = newPassword.concat(numericChars[Math.floor(Math.random()*numericChars.length)]);
    }

    if (specialChar) {
      newPassword = newPassword.concat(specialCharList[Math.floor(Math.random()*specialCharList.length)]);
    }

    while (newPassword.length > numChars) {
      newPassword = newPassword.slice(0,numChars);
    }
  }
  return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.textContent = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
