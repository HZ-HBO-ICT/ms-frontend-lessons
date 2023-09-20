import { writable } from 'svelte/store';

export const selectedCustomer = writable({
  id: 'number of the customer',
  name: 'name of the pet',
  breed: 'breed of the pet of the customer',
});

/**
 * update is a method that takes one argument which is a callback. 
 * The callback takes the existing store value as its argument 
 * and returns the new value to be set to the store.
 * @param {*} customer - new value
 */
// export const setSelectedCustomer = (customer) => {
//     selectedCustomer.update(() => ({...customer}));
// }