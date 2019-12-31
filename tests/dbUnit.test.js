const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

describe('applyDiscount', () => {
    it('should apply 10% discount if customer has more than 10 points', () => {
        db.getCustomerSync = (customerId) => {
            console.log('Fake reading ....');
            return { id: customerId, points: 20 };
        }

        const order = { customerId: 1, totalPrice: 10};
        lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
});

describe('notifyCustomer', () => {
    it('should send an email to the customer', () => {
        db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
        mail.send = jest.fn();
        // db.getCustomerSync = function(customerId) {
        //     return { email: 'a' };
        // }
        // let mailSent = false;
        // mail.send = (email, message) => {
        //     mailSent = true;
        // }
        lib.notifyCustomer({ customerId: 1 });
        // expect(mailSent).toBe(true);
        expect(mail.send.mock.calls[0][1]).toMatch(/order/);
        expect(mail.send).toHaveBeenCalled();
    });
});