import { User } from './models/User';

const user = new User({ id: 4, name: 'newer', age: 120 });

user.on('save', () => {
  console.log(user);
});

user.save();
