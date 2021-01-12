// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('if i put in 3 and 3 it should return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if i insert 1 and 3 it should return -1', (expect) => {
    const expected = -1;
    const actual = compareNumbers(1, 3);
    expect.equal(actual, expected);
});

test('if i insert 4 and 3 it should return 1', (expect) => {
    const expected = 1;
    const actual = compareNumbers(4, 3);
    expect.equal(actual, expected);
});