const sumAll = function(firstNum, lastNum) {
    let total = 0;

    if((typeof firstNum !== "number")||(typeof lastNum !== "number")){
        return "ERROR"
    }
    
    if((firstNum<0)||(lastNum<0)){
        return "ERROR";
    }

    if(firstNum > lastNum){
        let placeHolder = firstNum;
        firstNum = lastNum;
        lastNum = placeHolder;
    }

    for(let current = firstNum;current <= lastNum; current++){
            total += current;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
