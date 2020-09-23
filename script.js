// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword()
  var lowercaseCharString = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharString = "0123456789";
  var specialCharacterCharString = "!@#$%^&*()_+<>?-=";
  var passwordCharString = "";

  var passwordLength = 0;

  

  if (
    passwordText
  )


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
