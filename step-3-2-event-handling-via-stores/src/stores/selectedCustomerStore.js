import { writable } from 'svelte/store';

export const selectedCustomer = writable({
  id: 'number of the customer',
  name: 'name of the pet',
  breed: 'breed of the pet of the customer',
});
