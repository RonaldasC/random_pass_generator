"use strict"

const min = 8;
const max = 11; 

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+-=";

function generatePassword(length) {
  let password = "";

  for (let i = 0; i < length; i++) {
    if (Math.round(Math.random()) === 1) {
        if (Math.round(Math.random()) === 1){
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            password += alphabet[randomIndex].toUpperCase();
        } else {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            password += alphabet[randomIndex];
        }
    } else {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      password += symbols[randomIndex];
    }
  }
  return password;
}

for (let i = 0; i < 100; i++){
    const randomInteger = Math.floor(Math.random() * (max - min) + min);
    const password = generatePassword(randomInteger);
    console.log(`${password.length}  ${password}`);
}
