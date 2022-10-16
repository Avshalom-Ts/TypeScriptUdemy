import { User } from './models/User';

const user = new User({ name: 'Avshalom', age: 39 });
user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Save was triggered');
});
console.log(user);
user.trigger('change');
user.trigger('save');

// console.log(user.get('name'));
// console.log(user.get('age'));

// user.set({ name: 'Angelika' });
// user.set({ age: 30 });
// console.log(user.get('name'));
// console.log(user.get('age'));
