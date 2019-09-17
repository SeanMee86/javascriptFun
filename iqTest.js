function iqTest(numbers){
    const numbersArray = numbers.split(' ');
    const evenNumbers = numbersArray.filter(number => number % 2 === 0);
    const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
    return evenNumbers.length > 1 ? numbersArray.indexOf(oddNumbers[0]) + 1 : numbersArray.indexOf(evenNumbers[0]) + 1;
}

console.log(iqTest("3 7 9 5 21 45 80 49"));