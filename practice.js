'use strict';
/** Currency converter
 * first, We have to take two variable 
 * one is for how much and another one is for what currency is it?
 * 
 * 
 * than, take another convert variable to calculate how much variable times what currency you want to convert that price.
 * finally, take log and show them like below:
 * 'total amount ' + how much variable + what currency variable + ' = ' + convert variable + ' name '
 * 11 added
 */

let money = prompt('How much to convert');
let currency = prompt('What is the name of the currency');
// let arr = [dollar, euro, peso, florin, manat, dinar, boliviano, mark, pula, real, lev];

let rate = 0;

if (currency == 'dollar') {
  rate = 86;
} else if (currency == 'euro') { // 1 euro = bangladeshi 95 taka 
  rate = 95;
} else if (currency == 'peso') {
  rate = 3;
} else if (currency == 'florin') {
  rate = 42;
} else if (currency == 'manat') {
  rate = 50;
} else if (currency == 'dinar') {
  rate = 228;
} else if (currency == 'boliviano') {
  rate = 12;
} else if (currency == 'mark') {
  rate = 47;
} else if (currency == 'pula') {
  rate = 7;
} else if(currency == 'real'){
  rate = 18;
} else if (currency == 'lev') {
  49;
}else {
  alert('Wrong input. Try again!')
}

let convert = parseFloat(money) * rate;

// console.log(arr.splice(1));

console.log(`

  Amount converter

  ${money} ${currency} = ${convert} Taka
`);