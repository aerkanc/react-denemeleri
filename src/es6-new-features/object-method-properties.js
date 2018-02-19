// const helper = {
//   uppercase: (string => string.toUpperCase()) ,
//   lowercase: (string=> string.toLowerCase()),
// };

const helper = {
  uppercase(str) {
    return str.toUpperCase();
  },
  lowercase(str) {
    return str.toLowerCase();
  },
};

console.log(helper.lowercase('BÜYÜK'));
