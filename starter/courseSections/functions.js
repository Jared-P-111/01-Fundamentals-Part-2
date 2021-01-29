//Functions are essentialy a chunk of code that we can use over and over again. 

//Keyword | name(arguments){ function body aka code block }
 function logger() {
    console.log('A very simple function');
  }

logger();

//Functions can arguments ( ) to pass data into the function and can return
//data as well. 

//apples and oranges represent the input data for the functions these are the 
//arguments.

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//Notice how simply invoking the function like this only returns the number 5 and 0;
//In order to use the return of the function we need to store it in a variable with
//the function. 
fruitProcessor(5, 0);

//Here we will store the function in a varible this will then return the result of 
//of the function. Below we can store the function in the variable and then call the
//variable with console.log we can see the return results directly through the 
//console .log

//Stores function in variable appleJuice
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//Logs the result of function directly to console. 
console.log(fruitProcessor(5, 0));

//Now that the function is created we can access and put in differnt variables. 

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);