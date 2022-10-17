import { User } from './models/User';

const user = User.buildUser({ id: 2, name: 'Angelika', age: 30 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
