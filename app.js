import {
    sum, sub, mult, div
} from './mathUtils.js'; 

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
    const add1 = document.getElementById('add1');
    const add2 = document.getElementById('add2');
    const resultSpan = document.getElementById('sum-result');

    const firstValue = Number (add1.value);
    const secondValue = Number (add2.value);
    const result = sum(firstValue, secondValue);

    resultSpan.textContent = result;
}); 

const subButton = document.getElementById('sub-button');
subButton.addEventListener('click', () => {
    const sub1 = document.getElementById('sub1');
    const sub2 = document.getElementById('sub2');
    const resultSpan = document.getElementById('sub-result');

    console.log(sub1.value);
    console.log(sub2.value);
    const firstValue = Number (sub1.value);
    const secondValue = Number (sub2.value);
    const result = sub(firstValue, secondValue);

    console.log(sub);
    resultSpan.textContent = result;
});

const multButton = document.getElementById('mult-button');
multButton.addEventListener('click', () => {
    const mult1 = document.getElementById('mult1');
    const mult2 = document.getElementById('mult2');
    const resultSpan = document.getElementById('multiply-result');

    console.log(mult1.value);
    console.log(mult2.value);
    const firstValue = Number (mult1.value);
    const secondValue = Number (mult2.value);
    const result = mult(firstValue, secondValue);

    console.log(mult);
    resultSpan.textContent = result;
});

const divButton = document.getElementById('divide-button');
divButton.addEventListener('click', () => {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const resultSpan = document.getElementById('div-result');

    const firstValue = Number (div1.value);
    const secondValue = Number (div2.value);
    const result = div(firstValue, secondValue);

    resultSpan.textContent = result;
}); 