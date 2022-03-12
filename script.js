

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Creating varibles that will be used for password criteria
var lowerCasing = "abcdefghijklmnopqrstuvwxyz";
var upperCasing = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456780";
var specialCasing = "~!@#$%^&*()"


// Creating a function that will generate the password
function generatePassword() {

  var password = "";
  var passwordCharacter = "";
  
  var userLength = prompt("How many characters would you like? Password must be between 8 to 128 characters.");
  userLength = parseInt(userLength);
  
    if (userLength < 8) {
      alert("Password must be at least 8 characters!");
      return "";
    } else if (userLength > 128) {
      alert ("Password must be less than 128 characters!");
      return "";
    }

  var lowerCaseChoice = confirm("Do you want lowercase charcters?");
    if (lowerCaseChoice === true) {
      passwordCharacter += lowerCasing;
    }

  var upperCaseChoice = confirm("Do you want uppercase characters?");
    if (upperCaseChoice === true) {
      passwordCharacter += upperCasing;
    }

  var numberChoice = confirm("Do you want numbers?");
    if (numberChoice === true) {
      passwordCharacter += numbers;
    }

  var specialChoice = confirm("Do you want special characters?");
    if (specialChoice === true) {
      passwordCharacter += specialCasing;
    }

  for (var i = 0; i < userLength; i++) {
    password += passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)]
  }  

  // the retun function allows the content to display when the button is pressed
  // In theory, after writing all the code, the return function should display the final password
  return password;
  

}
// Allows the value of the randomized password to be stored into a varible called 'password'
function writePassword() {
  var password = generatePassword(); 
  var passwordTextArea = document.getElementById("password");
  passwordTextArea.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);