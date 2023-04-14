let generateBtn = document.querySelector("#generate");
let lowerValid;
let uperValid;
let numberValid;
let specialValid;
let unfinishedPass;

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

    lowerValid = confirm("Do you want to include lowercase characters?");
    if(lowerValid){
      //generate random char from the coresponding lib

      //store it 
    }
    //uppercase

    uperValid = confirm("Do you want to include uppercase characters?");

    //numbers
    numberValid = confirm("Do you want to include numbers");

    //special char
    specialValid = confirm("Do you want to include special characters?");

    //check if uses at least one character type
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
  let pass = "";
  for (let j = 0; j < passwordLength; j++) {
    pass+=genRandom(currentLib); 
   }
  console.log(pass);

  return pass;
}

//generate random from a list
function genRandom(list){
  const random = list.charAt(Math.floor(Math.random()*list.length));
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
