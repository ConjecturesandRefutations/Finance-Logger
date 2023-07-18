//const anchor = document.querySelector('a')!;

/* if(anchor){
    console.log(anchor.href);
} */

//console.log(anchor.href);

//const form = document.querySelector('form')!;

const invOne = new Invoice('mario','work on mario website',250);
const invTwo = new Invoice('luigi','work on luigi website',300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

invTwo.amount = 400;

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})