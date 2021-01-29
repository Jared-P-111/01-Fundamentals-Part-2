

///////////////CODE CHALLENGE 3/////////////////////


const clientMark = {
    firstName: 'Mark',
    lastName:  'Miller',
    mass:  78,
    height:  1.69,    

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const clientJohn = {
    firstName:  'John', 
    lastName:  'Smith',
    mass:  92,
    height:  1.95, 
    
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

clientMark.calcBMI();
clientJohn.calcBMI();

if (clientJohn.bmi >= clientMark.bmi) {
    console.log(`John's BMI is greater then Mark's with ${clientJohn.bmi} to ${clientMark.bmi}`)
} else {
    console.log(`Mark's BMI is greater then John's with ${clientMark.bmi} to ${clientJohn.bmi}`)
}

