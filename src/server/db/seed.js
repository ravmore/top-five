const { User, Playlist } = require('./index').models;


Promise.all([
  User.create({ name: 'Ravish Rawal'}),
  User.create({ name: 'Alec Draymore'})
])
  .then((users) => {
    console.log('users seeded:', users);
});
