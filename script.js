let generateBtn = document.querySelector("#generate");
let lowerValid;
let uperValid;
let numberValid;
let specialValid;

// get password Length function
function getLength() {
  validLength = false;
  while (!validLength) {
    let len = prompt("Enter length between 8 and 128");
    if (Number(len) >= 8 && Number(len) <= 128) {
      validLength = true;
      return len;
    } else if (len === null) {
      alert("ok seeya");
      return len;
    }
  }
}
// function to get char types and validate 
function charTypes() {

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
function generatePassword(passwordLength, lowercase, upercase, num, specChar) {

  //object library 1:string 2:use/not
  const lib = [
    {
      str: 'abcdefghijklmnopqrstuvwxyz',
      use: lowercase
    },
    {
      str: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      use: upercase
    },
    {
      str: "0123456789",
      use: num
    },
    {
      str: `!@#$%^&*()_+-=?{}~,.`,
      use: specChar
    }
  ];

  //combine if there are more  libraries to use
  let currentLib = '';
  for (let i = 0; i < lib.length; i++) {
    let current = lib[i];
    //condition which libraries to use
    if (current.use === true) {
      currentLib += current.str;
    }
  }
  console.log(currentLib);
  //generate random string from the current library
  let random = "";
  for (let j = 0; j < passwordLength; j++) {
    random += currentLib.charAt(Math.floor(Math.random() * currentLib.length));
  }
  console.log(random);

  return random;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  let passLength = getLength();
  console.log(passLength);
  if (passLength !== null) {
    charTypes();
    console.log(lowerValid, uperValid, numberValid, specialValid);
  }
  let password = generatePassword(passLength, lowerValid, uperValid, numberValid, specialValid);


  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
