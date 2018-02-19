const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
  key5: 'value5',
};
console.log(Object.entries(obj));

for (const [key, value] of Object.entries(obj)) {
  console.log(`key: ${key}, value: ${value}`);
}
