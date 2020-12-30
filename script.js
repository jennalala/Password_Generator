var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var lowerCaseCharString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharString = "0123456789";
  var specialCharString = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var passwordCharSet = "";

  var passwordLength = 0;
  var lowerCase;
  var upperCase;
  var numeric;
  var specialChar;
  var characterChoice = false;
  var finalPasswordString = "";
  while (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(passwordLength) ||
    Number.isInteger(+passwordLength) != true
  ) {
    passwordLength = prompt("Choose between 8 and 128 characters.");
    if (passwordLength === null) {
      return "Cancelled Generated Password";
    } else {
      if (passwordLength < 8) {
        alert("Password length must be longer than 8 characters");
      } else if (passwordLength > 128) {
        alert("Password length must be less than 129 characters.");
      } else if (
        isNaN(passwordLength) ||
        Number.isInteger(+passwordLength) != true
      ) {
        alert(
          "Password length must be a whole number greater than 8 but less than 129"
        );
      }
    }
  }
  while (characterChoice === false) {

    lowerCase = confirm("Click OK to use lowercase letters.");
    if (lowerCase) {
      passwordCharSet += lowerCaseCharString;
    }

    upperCase = confirm("Click OK to use uppercase letters.");
    if (upperCase) {
      passwordCharSet += upperCaseCharString;
    }

    numeric = confirm("Click OK to use numbers.");
    if (numeric) {
      passwordCharSet += numericCharString;
    }

    specialChar = confirm("Click OK to use special characters.");
    if (specialChar) {
      passwordCharSet += specialCharString;
    }

    if (
      lowerCase === true ||
      upperCase === true ||
      numeric === true ||
      specialChar === true
    ) {
      characterChoice = true;
    } else {
      alert("Confirm at least one character type to include in password.");
    }
  }
  var numCharacterOptions = passwordCharSet.length;
  var passwordCharIndex;

  for (i = 0; i < passwordLength; i++) {
    passwordCharIndex = Math.floor(Math.random() * numCharacterOptions);
    finalPasswordString += passwordCharSet[passwordCharIndex];
  }
  return finalPasswordString;
}
generateBtn.addEventListener("click", writePassword);
