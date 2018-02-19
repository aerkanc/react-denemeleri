const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const total = arr.reduce((prev, cur /* curIndex */) => cur + prev, 0);

console.log(total);
