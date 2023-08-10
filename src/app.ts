import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number):  number {
        console.log('I spent', amount);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}


//const anchor = document.querySelector('a')!;

/* if(anchor){
    console.log(anchor.href);
} */

//console.log(anchor.href);

//const form = document.querySelector('form')!;

/* const invOne = new Invoice('mario','work on mario website',250);
const invTwo = new Invoice('luigi','work on luigi website',300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

invTwo.amount = 400; */

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');

});

// GENERICS

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
let docThree = addUID({name:'yoshi', age: 40});

console.log(docThree.name);

//with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}