
//.push is a method and it is attached to the friends array with the .dot notation. 

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');//.push adds to the end of the array.

///////////////////ADD ELEMENTS TO ARRAY/////////////////////////
console.log(friends);//shows the items in the array.
console.log(newLength);//shows the return of .push Which is the new length of the 
// array after the item is .pushed to it. 

friends.unshift('John');//Unshift adds item to beginning of the array. 
console.log(friends);

///////////////////REMOVE ELEMENTS TO ARRAY/////////////////////

friends.pop();//no arguments are needed as it just removes the last element in the 
//array. 
const popped = friends.pop();//When the variable popped is used it removes last 
//element in array. 

console.log(popped)//Logs the return of pop and shows what element was popped. 
console.log(friends);

friends.shift();//.shift removes the first element in the array.

console.log(friends);

console.log(friends.indexOf('Steven'));//This method shows the location of a 
//specific element in the array. 

console.log(friends.includes('Steven'));//Returns boolean value if array has the 
//the element or not. 
console.log(friends.includes('Bob'));//Returns false
console.log(friends.includes('steven'));//Type sensitive & strict equality.
//a number will not be noticed if it is a string.

//there is a ton of methods for manipulating arrrays. 

