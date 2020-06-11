import { sum, sub, mult, div } from '../mathUtils.js';

const test = QUnit.test;

test('test our add function', function(expect) {

    const firstValue = 2;
    const secondValue = 4;  
    const expected = 6;

    const result = sum(firstValue, secondValue);

    expect.equal(expected, result);
});

test ('test our sub function', function(expect) {

    const firstValue = 4;
    const secondValue = 2;
    const expected = 2;

    const result = sub(firstValue, secondValue);

    expect.equal(expected, result);
}); 

test ('test our mult function', function(expect){

    const firstValue = 4;
    const secondValue = 2;
    const expected = 8;

    const result = mult(firstValue, secondValue);

    expect.equal(expected, result);
});

test ('test our dev function', function(expect){

    const firstValue = 4;
    const secondValue = 2;
    const expected = 2;

    const result = div(firstValue, secondValue);
    
    expect.equal(expected, result);

});