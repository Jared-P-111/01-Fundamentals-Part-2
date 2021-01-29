
///////////My Answer////////////////
let tipPercentage;
const billAmount = 125;
const bills = [125, 555, 44];
const Mytips = [18.75, 111, 8.8];
const total = [143.75, 666, 52.8]


const calcTip = function(billAmount) {
    if (billAmount >= 50 && billAmount <= 300) {
        return billAmount * .15;
    } else return billAmount * .2;
}

console.log(`Your bill is ${billAmount} and your tip should be ${calcTip(billAmount)}`);
console.log(`Your total should be  ${billAmount + calcTip(billAmount)}`);
console.log(`Your recent tips ${Mytips}`);
console.log(`Your recent bills ${bills}`);

//////////Course Answer/////////////////////

const calcTips =  function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .2;
}


const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals);