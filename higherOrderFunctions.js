const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// ****** ForEach ******

// companies.forEach((company, index, companies) => console.log(company.name));

// ****** Filter ******

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// Filter Retail Companies

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// Get 80's Companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// eightiesCompanies.forEach(company => console.log(company.name));

// Get companies that lasted 10 years or more

// const tenYearCompanies = companies.filter(company => (company.end - company.start) >= 10);
// console.log(tenYearCompanies);

// ****** Map ******

// Create array of company names

// const companyInfo = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyInfo);

// const agesSquare = ages
//     .map(age => Math.pow(age,2))
//     .map(age => age / 2);
// console.log(agesSquare);

// ****** Sort ******

// const sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else {
//         return -1;
//     }
// });

// const sortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1);
// console.log(sortedCompanies);
//
// const sortedAges = ages.sort((a,b) => a - b);
// console.log(sortedAges);

// ****** Reduce ******

// const ageSum = ages.reduce((acc,val) => {
//     console.log(`Accumulator: ${acc}, Value: ${val}`);
//     return val !== 16 ? acc + val : acc;
// });
// console.log(ageSum);

// const totalYears = companies.reduce((acc, val) => acc + (val.end - val.start), 0);
// console.log(totalYears);

// Using reduce to get the average of an array of numbers
// let agesAverage = ages.reduce((a,v,i) => i !== ages.length-1 ? a+v : (a+v)/ages.length-1);
// console.log(agesAverage);

// Combining Methods

// const combined = ages
//     .map(age => age *2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a-b)
//     .reduce((acc, val) => acc + val);
//
// console.log(combined);