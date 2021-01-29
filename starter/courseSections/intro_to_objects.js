
/////////////Intro to objects///////////////

//Another type of data structure 
//Arrays hold lots of values and so do objects but its important to remember that 
//they do not have a location that matters like an array does. There are many ways 
//to start an object but the simpleist way to do it witht he curly braces. 

const jared = {
    firstName: 'Jared',//<-- objects use key value pairs. 
    lastName: 'Pisell',//<-- notice the : and the comma seperation
    age: 2037 - 1981, //<-- expressions are allowed in objects
    job: 'programmer',
    friends: ['Erik', 'Brian', 'Justin'] //<-- Arrays are also allowed
};

console.log(jared);

//Arrays should be used for more ordered data and Objects for more unordered data.