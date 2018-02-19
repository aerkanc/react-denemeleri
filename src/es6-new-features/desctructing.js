const props = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
  prop5: 'value5',
  prop6: 'value6',
  prop7: 'value7',
  prop8: 'value8',
  prop10: {
    key1: 'val1',
    key2: 'val2',
  },
};

const { prop1, prop2, prop9 = 'value9', prop10: { key1 }, prop10: { key1: myVar } } = props;

console.log(prop1);
console.log(prop2);
console.log(prop9);
console.log(key1);
console.log(myVar);

const arr = [1, 2, 3];

const [var1, var2, var3] = arr;

console.log(var1);
console.log(var2);
console.log(var3);
