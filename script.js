let generateBtn = document.querySelector("#generate");
let unfinishedPass="";
let charSet="";
const lower = 'abcdefghijklmnopqrstuvwxyz';
const uper = lower.toUpperCase();
const nums = "0123456789";
const specialChars = `!@#$%^&*()_+-=?{}~,.`;

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
function genRandom(list) {
  let random = list.charAt(Math.floor(Math.random() * list.length));
  return random;
}
// function to get char types and validate 
function charTypes() {

  let valid = true;
  while (valid) {
    //lowercase

    let lowerValid = confirm("Do you want to include lowercase characters?");
    if(lowerValid){
      //generate random char from the coresponding lib
      //store it 
        unfinishedPass+=genRandom(lower);
        //update charSet
        charSet+=lower;
        console.log(unfinishedPass);
        console.log(charSet);
    }
    //uppercase

    let uperValid = confirm("Do you want to include uppercase characters?");
    if (uperValid) {
      //generate random char from the coresponding lib
      //store it 
      unfinishedPass += genRandom(uper);
      //update charSet
      charSet += uper;
      console.log(unfinishedPass);
      console.log(charSet);
    }

    //numbers
    let numberValid = confirm("Do you want to include numbers");
    if (lowerValid) {
      //generate random char from the coresponding lib
      //store it 
      unfinishedPass += genRandom(nums);
      //update charSet
      charSet += nums;
      console.log(unfinishedPass);
      console.log(charSet);
    }
    //special char
    let specialValid = confirm("Do you want to include special characters?");
    if (lowerValid) {
      //generate random char from the coresponding lib
      //store it 
      unfinishedPass += genRandom(specialChars);
      //update charSet
      charSet += specialChars;
      console.log(unfinishedPass);
      console.log(charSet);
    }

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
function generatePassword(passwordLength,characters) {
  let newpass= unfinishedPass;

  for (let i = unfinishedPass.length; i < passwordLength; i++) {
    newpass += genRandom(characters);
  }
  console.log(unfinishedPass);

  return newpass;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  let passLength = getLength();
  console.log(passLength);
  if (passLength !== null) {
    charTypes();
  }
  let password = generatePassword(passLength, charSet);
  console.log(password);


  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
