

const repeatString = function(string, repetition) {
let finalWord ="";

if(repetition < 0) return "ERROR"
for(let i = 1; i<=repetition;i++){
 finalWord = finalWord.concat(string);
}
return finalWord;
};

finalWord = "";
// Do not edit below this line
module.exports = repeatString;
