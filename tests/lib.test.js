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

//Group all related tests for testing strings.
describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('MaGaby');
        expect(result).toMatch(/MaGaby/);       //Use a regular expresion.
        expect(result).toContain('MaGaby');     //Use another matcher.
    });
});

//Group all related tests for testing arrays.
describe('getCurrencies', () => {
    it('should return suported currencies', () => {
        const result = lib.getCurrencies();
        /* expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR'); */
        //Better approach:
        expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']))
    });
});

//Group all related tests for testing objects.
describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        expect(result).toEqual({ id: 1, price: 10 });
        expect(result).toMatchObject({ id: 1, price: 10 });
        expect(result).toHaveProperty('id', 1);
    });
});

