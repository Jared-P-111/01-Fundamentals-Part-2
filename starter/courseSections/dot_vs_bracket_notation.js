
///////////Object/////////////
const jared = {
    firstName: 'Jared',//<-- objects use key value pairs. 
    lastName: 'Pisell',//<-- notice the : and the comma seperation
    age: 2037 - 1981, //<-- expressions are allowed in objects
    job: 'programmer',
    friends: ['Erik', 'Brian', 'Justin'] //<-- Arrays are also allowed
};

//dot notation is one way to access the properties of the object.

console.log(jared.lastName);

//Brackets can be used in this syntax to access properties of an object as well. 

console.log(jared['lastName']);

//exprssions can be put inside the brackets

const nameKey = 'Name';
console.log(jared['first' + nameKey]);
console.log(jared['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jared? Choose between firstName, LastName, age, job, and friends');


//The bracket notation allows an expression so when we pass in the interestedIn 
//variable the prompt replaces the varialbe with the input and it locates the 
//object property. 

//the jared[interedIn] evaluates to true so the if block is executed. remember 
//prompt replaces the interestedIn variable. and then seeks the property in the 
//object.
if (jared[interestedIn]) {
    console.log(jared[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

//Challenge to rewrite the below statement dynamically by accessing the object jared

//"Jared has 3 friends, and his best friend is called Brian"

console.log(`Jared has ${jared.friends.length} friends ${jared.friends} and his best friend is called ${jared.friends[1]}`);