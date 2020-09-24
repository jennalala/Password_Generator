// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var letter = /[a-z]/;
var upper  =/[A-Z]/;
var number = /[0-9]/;
var specialCharacter = /"!@#$%^&*()\<>?"/

var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
function writePassword(): {
var password = generatePassword();
var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
}