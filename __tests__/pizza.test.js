// const OrderTotal = require('./../src/pizza.js');

// describe('OrderTotal', () => {
//     test('total price should be zero when no pizzas are added', () => {
//         const order = new OrderTotal();
//         expect(order.totalPrice).toBe(0);
//     });

// });
import OrderTotal from './../src/pizza.js';

describe('OrderTotal', () => {

    test('total price should be zero when no pizzas are added', () => {
        const order = new OrderTotal();
        expect(order.totalPrice).toEqual(0);
    });
});
