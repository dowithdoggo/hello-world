
const prompt = require("prompt-sync")({ sigint: true });



let randomNumber = Math.floor(Math.random() * 3) // Math.random() => 0...1  like 0,01...0,01111
let greeting = null;

if (randomNumber == 0) {
    greeting = "Aloha";
}

if (randomNumber == 1) {
    greeting = "Hej";
} 

if (randomNumber == 2 ) {
    greeting = "Hallo";
  }



//console.log(randomNumber);
 const name = prompt("what's your name? ");
 console.log(`${greeting} mr/mrs: ${name}`);