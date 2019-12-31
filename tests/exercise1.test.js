const lib = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw exception if input is not number', () => {
        const args = ['a', null, undefined, false];
        args.forEach(a => {
            expect(() => { lib.fizzBuzz(a) }).toThrow();
        })
    });

    it('should return FizzBuzz if number is a multiple of 3 & 5', () => {
        const result = lib.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('should return Fizz if number is a multiple of 3', () => {
        const result = lib.fizzBuzz(6);
        expect(result).toBe('Fizz');
    });

    it('should return Buzz if number is a multiple of 5', () => {
        const result = lib.fizzBuzz(10);
        expect(result).toBe('Buzz');
    });

    it('should return input if number is not a multiple of 3 & 5', () => {
        const result = lib.fizzBuzz(1);
        expect(result).toBe(1);
    });
});