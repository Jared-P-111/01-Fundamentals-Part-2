
/////////////////ARRAYS////////////////////


/////////Array holding strings/////////////
const friends = ['Michael', 'Steven', 'Peter'];
console.log(`Array of friends: ${friends}`);
////////Array holding numbers/////////////
const years = new Array(1991, 1984, 2008, 2020);
console.log(`Array of years: ${years}`);

//We can select an item out of the array using this syntax. 
console.log(`Locating inside array at (friends[0] = ${friends[0]})`);
console.log(`Locating inside array at (friends[2] = ${friends[2]})`);

//Using the .length property to see the length of the array. .length does not use 0 based
//numbering. So always subtract a 1 from length to see actual location. 
console.log(`The length of the array: ${friends.length}`);

console.log(friends[friends.length -1]);//<-- Note we can put expressions in the []'s 

//We can change things in the array like this

friends[2] = 'Jay';
console.log(friends);

//Arrays can hold multiple types of data 

const firstName = 'Jared'
const jared = [firstName, 'Pisell', 2037 - 1981, 'teacher', friends];
console.log(jared);

//Exercise

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsOfArray = [1990, 1967, 2002, 2010, 2018];

//This will call the item in the array and run the function on it. 
const age1 = calcAge(yearsOfArray[0]);
const age2 = calcAge(yearsOfArray[1]);
const age3 = calcAge(yearsOfArray[yearsOfArray.length - 1]);
console.log(age1, age2, age3);

//This will run the function expression and place the result in the array.

const ages = [calcAge(yearsOfArray[0]), calcAge(yearsOfArray[1]), calcAge(yearsOfArray[yearsOfArray.length - 1])];

//Arrays can take expressions and will calculate and return the itme into the array. 

console.log(ages);