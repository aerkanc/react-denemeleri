const obj1 = {
  key1: 'value1',
  key2: 'value2',
};

const obj2 = {
  key1: 'new-value',
  key3: 'value3',
};

const obj3 = {
  key4: 'value4',
};

objs = [obj1, obj2, obj2];

const output = Object.assign({}, obj1, obj2, obj3);

console.log(obj1);
console.log(output);
