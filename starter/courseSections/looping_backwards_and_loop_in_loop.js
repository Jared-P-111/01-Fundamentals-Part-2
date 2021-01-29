

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for(let i = jonas.length - 1; i >= 0; i--) {
    if(typeof jonas[i] === 'object'){
        console.log(i, jonas[i], typeof jonas[i],'<-- This is an Object');
    } else if (typeof jonas[i] === 'string'){
        console.log(i, jonas[i], typeof jonas[i],'<-- This is an String');
    }     
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting Exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️🏋️‍♂️🏋️‍♂️`)
    }
}

