for(let i = 0; i <= 1000; i++){
    switch(i){
        case 1:
            const startTime = new Date();
            console.log(`${startTime.getSeconds()}.${startTime.getMilliseconds()}`);
            break;
        case 1000 :
            const endTime = new Date();
            console.log(`${endTime.getSeconds()}.${endTime.getMilliseconds()}`);
            break;
    }

}