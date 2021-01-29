

//Arrow function is a new type of function that is written with the => symbol


/////////////////FUNCTION DECLARATION/////////////////

const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(age1);

////////////////FUNCTION EXPRESSION//////////////////

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

////////////////ARROW FUNCTION//////////////////////
//The arrow function is considered an expression and will need to be defined prior
//to it being invoked. 
//The arrow function implicitly returns we do not need to write return. 
const calcAge3 = birthYear => 2037 - birthYear;//<-- Defined here
const age3 = calcAge3(1991);//<--invoked here
console.log(age1, age2, age3);


//When you have more then 1 line you need to use curly braces and this will mean 
//it is not implicit but explicit and you need to use return. 
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1981, 'jared'));

