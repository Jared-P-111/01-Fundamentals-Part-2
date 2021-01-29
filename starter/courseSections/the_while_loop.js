

////////////////The While Loop//////////////////

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}

//The while loop is more versitile because the condition doesn't need to be 
//a counter. We can use all sorts of things to have the while loop terminate. 
//The while loop will continue to run *while the condition is true. 


let rep = 1;
while (rep <= 10){
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if(dice === 6){console.log(`BUST! You rolled a 6`)};
}

//If the first number is a 6 in the example above the loop will never engage. 
//The while loop is the right loop to use when you do not know how many iterations
//are needed. 