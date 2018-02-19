const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map(item => item * 2);

console.log(newArr);

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

console.log(...users.map(user => `id: ${user.id} username: ${user.username}`));
