const asyncFn = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('asenkron response');
    }, 3000);
  });
asyncFn()
  .then(output => console.log(output))
  .then()
  .catch();

// tüm işlemler bitince yap
// Promise.all([asyncFn1(),asyncFn2(),asyncFn2()]).then();
