const reverseString = function(word) {
    let container = "";
    for(let i = word.length-1;i >=0;i--){
        container = container.concat(word[i]);
    }
    return container;
    
};

// Do not edit below this line
module.exports = reverseString;