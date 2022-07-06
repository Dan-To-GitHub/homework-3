// Assignment Code
var generateBtn = document.querySelector("#generate");
// List of characters
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "`~!@#$%^&*()-=_+[]\{}|;:,./<>?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var chosenCharacters = "";
  var validatedTypes = "";
  var yesLowercase = confirm("Include lowercase characters?");
  if (yesLowercase === true) {
    chosenCharacters += lowercase;
    validatedTypes += lowercase[Math.floor(Math.random() * lowercase.length)];
    console.log(validatedTypes);
  };
  var yesUppercase = confirm("Include uppercase characters?");
  if (yesUppercase === true) {
    chosenCharacters += uppercase;
    validatedTypes += uppercase[Math.floor(Math.random() * uppercase.length)];
    console.log(validatedTypes);
  };
  var yesNumeric = confirm("Include numeric characters?");
  if (yesNumeric === true) {
    chosenCharacters += numeric;
    validatedTypes += numeric[Math.floor(Math.random() * numeric.length)];
    console.log(validatedTypes);
  };
  var yesSpecial = confirm("Include special characters?");
  if (yesSpecial === true) {
    chosenCharacters += special;
    validatedTypes += special[Math.floor(Math.random() * special.length)];
    console.log(validatedTypes);
  };
  if (chosenCharacters === "") {
    alert("You must select at least one character type!");
  } else {
    var numCharacters = prompt("Select the number of characters from 8 to 128.");
    if (numCharacters >= 8 && numCharacters <= 128) {
      var password = "";
      for (i = 0; i < (numCharacters - validatedTypes.length); i++) {
        password += chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
      }
      return (password + validatedTypes);
    } else {
      alert("You must pick a number from 8 to 128!");
    };
  };
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
