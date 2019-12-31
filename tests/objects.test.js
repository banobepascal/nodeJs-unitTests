const lib = require('../testing-demo/lib');

describe('getProduct', () => {
    it('should return product with given id', () => {
        const result = lib.getProduct(1);
        // to specific
        expect(result).toEqual({ id: 1, price: 10 });

        // ideal ways
        expect(result).toMatchObject({ id: 1, price: 10 });
        expect(result).toHaveProperty( 'id', 1);
    });
})