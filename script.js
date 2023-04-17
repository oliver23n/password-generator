let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector('#copy');
let unfinishedPass = "";
let charSet = "";
const lower = 'abcdefghijklmnopqrstuvwxyz';
const uper = lower.toUpperCase();
const nums = "0123456789";
const specialChars = `!@#$%^&*()_+-=?{}~,.`;

function getLength() {
  validLength = false;

  while (!validLength) {
    let len = prompt("Enter length between 8 and 128");
    if (Number(len) >= 8 && Number(len) <= 128) {
      validLength = true;
      return len;
    } else if (len === null) {
      alert("See ya!");
      return len;
    }
  }
}

function genRandom(list) {
  let random = list.charAt(Math.floor(Math.random() * list.length));
  return random;
}

function charTypes() {

  let valid = true;
  while (valid) {

    let lowerValid = confirm("Do you want to include lowercase characters?");
    if (lowerValid) {
      unfinishedPass += genRandom(lower);
      charSet += lower;
    }

    let uperValid = confirm("Do you want to include uppercase characters?");
    if (uperValid) {
      unfinishedPass += genRandom(uper);
      charSet += uper;
    }

    let numberValid = confirm("Do you want to include numbers");
    if (numberValid) {
      unfinishedPass += genRandom(nums);
      charSet += nums;
    }

    let specialValid = confirm("Do you want to include special characters?");
    if (specialValid) {
      unfinishedPass += genRandom(specialChars);
      charSet += specialChars;
    }

    if ((lowerValid || uperValid)
      || (numberValid || specialValid)) {
      valid = false;
    } else {
      alert("Doesn't meet criteria. At least one character type must be included!");
    }
  }
  return;
}

function generatePassword(passwordLength, characters) {
  for (let i = unfinishedPass.length; i < passwordLength; i++) {
    unfinishedPass += genRandom(characters);
  }
  return unfinishedPass;
}

function writePassword() {
  unfinishedPass ='';
  var passwordText = document.querySelector("#password");
  let passLength = getLength();
  if (passLength !== null) {
    charTypes();
  }
  let password = generatePassword(passLength, charSet);
  passwordText.value = password;
}
function copyPass(){
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  if(copyText.value === ""){
    alert("Nothing to copy!");
  }else{
   alert("Copied the text: " + copyText.value);
  }
}
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click",copyPass);

