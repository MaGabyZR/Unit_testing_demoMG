const lib = require('../lib');

/* test('Our first test', () => {
  //throw new Error('Something failed miserably!');         //To produce an error and fail the test. 
}); */

//Testing numbers.
//First test case.
test('absolute - should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
});

//Second test case.
test('absolute - should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
});

//Third test case.
test('absolute - should return 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
});