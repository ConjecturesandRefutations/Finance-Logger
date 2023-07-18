import { Invoice } from './classes/Invoice.js';
//const anchor = document.querySelector('a')!;
/* if(anchor){
    console.log(anchor.href);
} */
//console.log(anchor.href);
//const form = document.querySelector('form')!;
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
invTwo.amount = 400;
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
