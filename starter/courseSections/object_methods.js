//Any function that is attached to an object is considered a method. 
//We can use an expression in a object and therefore we can use the 
//function Expression

const jared = {
    firstName: 'Jared',
    lastName: 'Pisell',
    birthYear: 1981,
    job: 'Programmer', 
    friends: ['Brian', 'Justin', 'Erik'], 
    hasDriversLicense: true,

    calcAge: function(birthYear) { 
        return 2037 - birthYear;
    },

    calcAge1: function() { 
        return 2037 - this.birthYear;//the this keyword points to the object
    },

    calcAge3: function() { 
        this.age = 2037 - this.birthYear;//We are now creating the propertie dynamically
        return this.age;
    },

    statLicense: function() {
        if (this.hasDriversLicense === true) {
        return 'a';
        } else {
            return 'no';
        }
    }

    
};

console.log(`Using .dot => ${jared.calcAge(1981)}`);//accessing the method with .dot notation

console.log(`Using [] => ${jared['calcAge'](1981)}`);//accessing with bracket notation

console.log(`Using .this in object => ${jared.calcAge1()}`);
//We dont need to add an argument if the this keyword is in the function. 
//essentially we are pulling the birthyear from the object itself.
jared.calcAge3();//Here we run the calcAge3 function which creates the age property.
console.log(`Accessing age directly from object => ${jared.age}`);//Now we can simply call the age property directly from the jared object

console.log(`${jared.firstName} is a ${jared.age}-year old programmer, and he has ${jared.statLicense()} drivers license`);
