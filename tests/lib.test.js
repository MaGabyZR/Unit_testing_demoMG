const lib = require('../lib');
const db = require('../db');

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

//Group all related tests for testing exceptions. Jest doesn´t 
describe('registerUser', () => {
    it('should throw if user name is falsy', () => {
         //Null, Undefined, NaN, '', 0, false
         //A better approach is to use a parameterized test. Without Jest:
         const args = [null, undefined, NaN, '', 0, false];
         args.forEach(a => {
            expect(() => { lib.registerUser(null) }).toThrow();
         });       
    });
    it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser('gaby');
        expect(result).toMatchObject({ username: 'gaby'});
        expect(result.id).toBeGreaterThan(0);
    });
});

//Group all related tests for testing outside resources, like a db, with a mock function.
describe('applyDiscount', () => {
    it('should apply 10% discount if customer has more than 10 points', () =>{
        //set the db function, to a new function that doesn´t talk to an external resource, in this case a database.
        db.getCustomerSync = function(customerId) {
            console.log('Fake reading customer from a db...');
            return { id: customerId, points: 20 };
        }
        
        const order = { customerId: 1, totalPrice: 10 };
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
});
