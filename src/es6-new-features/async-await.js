const asyncFn1 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('asenkron response 1');
    }, 3000);
  });
const asyncFn2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('asenkron response 2');
    }, 1000);
  });

const main = async () => {
  console.log('start');
  const data1 = await asyncFn1(); // await asenkron prosesin bitmesini bekle demek oluyor
  console.log('ilk promise beklendi.');
  const data2 = await asyncFn2();
  console.log('ikinci promise beklendi.');
  console.log(`Data 1: ${data1}, Data 2: ${data2}`);

  //Hata yakalamak için try catch finally bloğu kullanılabiliyor.
};

main();
