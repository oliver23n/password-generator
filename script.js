// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
let lowerValid;
let uperValid;
let numberValid;
let specialValid;

// get password Length function
function getLength() {
  validLength = false;
  while (!validLength) {
    let len = prompt("Enter length between 8 and 128");
    if (Number(len) > 8 && Number(len) < 128) {
      validLength = true;
      return len;
    } else if (len === null) {
      alert("ok seeya");
      return len;
    }
  }
}
// function to get char types and validate 
function charTypes(){

let valid = true;
while (valid) {
  //lowercase
    let lower = prompt("Do you want lowercase?");
      if (lower === null) {
      lowerValid = false;
      } else {
      lowerValid = true;
      }
  //uppercase
  let uper = prompt("Do you want uppercase");
  if (uper === null) {
    uperValid = false;
  } else {
    uperValid = true;
  }
  //number
  let numeric = prompt("Do you want to include numbers");
  if (numeric === null) {
    numberValid = false;
  } else {
    numberValid = true;
  }
  //special char
  let spec = prompt("Do you want to include special char");
  if (spec === null) {
    specialValid = false;
  } else {
    specialValid = true;
  }
  //check if meets criteria
   if ((lowerValid || uperValid)
      || (numberValid || specialValid)) {
      valid = false;
    } else {
      alert("Doesn't meet criteria. At least one character type must be included");
    }
}
return;
}

//generate password function

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  let passLength = getLength();
  console.log(passLength);
  if (passLength !== null) {
    charTypes();
    console.log(lowerValid, uperValid, numberValid, specialValid);
  }
}
  // passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
