const users = [
  {
    id: 1,
    username: 'erkan',
  },
  {
    id: 2,
    username: 'deniz',
  },
  {
    id: 3,
    username: 'enes',
  },
  {
    id: 4,
    username: 'fevzi',
  },
];

const user = users.find(item => item.username === 'erkan');

console.log(user);
