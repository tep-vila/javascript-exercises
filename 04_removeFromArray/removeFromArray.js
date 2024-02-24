    const removeFromArray = function(array, ...toRemove ) {
        toRemove.sort();
        array.sort();
    for(let i = 0;i <=array.length-1;i++){
        for(let j = 0;j <= toRemove.length-1;j++){
        if(array[i]===toRemove[j]){
            array.splice(i,1)
            for(let z = i;i <= array.length-1;z++){
                if(array[z]===toRemove[j]){
                    array.splice(z,1);
                }else break;
            }
        } else continue;
    }   

    }return array;
    };

// Do not edit below this line
module.exports = removeFromArray;
