

const jaredArray = [
    'Jared',
    'Pisell',
    2037 - 1991,
    true,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jaredArrayTypes1 = [];
const jaredArrayTypes2 = [];

for(let i = 0; i <= jaredArray.length ;i++) {
    //console.log(jaredArray[i]);
    jaredArrayTypes1[i] = typeof jaredArray[i];   //Example 1
    jaredArrayTypes2.push(typeof jaredArray[i]);  //Example 2
}

//console.log(jaredArrayTypes1);
//console.log(jaredArrayTypes2);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break 

//continue is to exit he current iteration of the loop and continue with the loop.
//break is to leave the loop entirely and stop the loop from working. 
console.log('--- ONLY STRINGS ---')
for(let i = 0; i < years.length; i++) {
    if (typeof jaredArray[i] !== 'string') continue;

    console.log(jaredArray[i], typeof jaredArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < years.length; i++) {
    if (typeof jaredArray[i] === 'number') break;

    console.log(jaredArray[i], typeof jaredArray[i]);
}