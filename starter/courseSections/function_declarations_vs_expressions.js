

//////////////FUNCTION DECLARATION/////////////////////
//Parameter is the placeholder for the argument. IE birthyear

//Notice how we can call the function declaration prior to it defined. It 
//works before and after.

const age1 = calcAge1(1991);//<-- calcAge1(1991); is the call.

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
//The argument is the actual input IE 1991



//////////////FUNCTION EXPRESSION//////////////////////

//Remember that an expression produces a value. Notice how this is an anonamous 
//function meaning it does not have a name but is stored into a variable. 
//Function Expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//The big difference is that function declarations can be called before they are 
//defined in the code. Expressions need to be defined prior to use. Meaning they 
//will need to be defined at the top before they are invoked. Programmers can 
//use both methods.  