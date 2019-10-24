const capitalizeFirstLetter = str => {
    const strArray = str.split('');
    let indices = [];
    let incrementor = 0;

    strArray.forEach((char, ind) => {
        if(char === ' '){
            indices.push(ind);
        }
    });
    const finalString = strArray
        .map((char,ind) => {
            switch(ind){
                case 0:
                    return char.toUpperCase();
                    break;
                case indices[incrementor]+1:
                    incrementor ++;
                    return char.toUpperCase();
                    break;
                default:
                    return char;
            }
        })
        .join('');
    console.log(finalString);
};

capitalizeFirstLetter('a bird flies away');
