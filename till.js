function tickets(peopleInLine){
    console.log(peopleInLine);
    let till = [];
    for(let i = 0; i < peopleInLine.length; i++){
        let person = peopleInLine[i];
        if(person >= 25){
            till.push(person);
            if(person > 25) {
                for(var j = 0; j < till.length; j++){
                    var bill = till[j];
                    if((person - bill) > 0){
                        person -= bill;
                        till.splice(j, 1);
                        j--
                    }
                }
            }
            if(person !== 25){
                return 'NO';
            }
        }
    }
    return 'YES';
}

console.log(tickets([[ 25, 25, 25, 25, 50, 100, 50 ]]));