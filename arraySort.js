function sortArray(arr){
    let numPosition = 0;
    let sortedArray = [];
    while(arr.length > 0){
        for (let i=0; i<arr.length; i++){
            if(arr[i+1]) {
                if (arr[i] < arr[i + 1] && arr[numPosition] > arr[i]) {
                    numPosition = i;
                }
            }else if(arr[numPosition] > arr[i]){
                numPosition = i;
            }
        }
        let numberToPush = arr.splice(numPosition, 1);
        sortedArray.push(numberToPush[0]);
        numPosition = 0;
    }
    return sortedArray;
}

const myArray = [100,201,400,5,2,8,2000,104];
console.log(myArray.sort((a,b) => a - b));
console.dir(sortArray(myArray));
console.log(myArray);
