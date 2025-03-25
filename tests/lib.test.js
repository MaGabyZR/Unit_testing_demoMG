const lib = require('../lib');

/* test('Our first test', () => {
  //throw new Error('Something failed miserably!');         //To produce an error and fail the test. 
}); */

//Group all related tests for testing numbers.
describe('absolute', () => {
    //First test case.
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });

    //Second test case.
    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });

    //Third test case.
    it('should return 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

