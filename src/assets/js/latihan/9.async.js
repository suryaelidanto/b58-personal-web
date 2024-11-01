// 1. ASYNCHRONOUS

// console.log("Hello 1")
// setTimeout(() => {
//     console.log("Hello 2")
// }, 3000)
// console.log("Hello 3")

// 2. PROMISE => "saya berjanji..."

// STATUS
// PENDING => menunggu status
// RESOLVED => ditepati
// REJECTED => diingkari

// function janjiBayarHutang(sudahBayarHutang) {
//   return new Promise((resolve, reject) => {
//     if (sudahBayarHutang) {
//       resolve('Sudah bayar hutang!');
//     } else {
//       reject('Galbay hutang!');
//     }
//   });
// }

// janjiBayarHutang(false)
//   .then(message => console.log(message))
//   .catch(errorMessage => console.log(errorMessage));

// 3. ASYNC-AWAIT

// function janjiBayarHutang(sudahBayarHutang) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (sudahBayarHutang) {
//         resolve('Sudah bayar hutang!');
//       } else {
//         reject('Galbay hutang!');
//       }
//     }, 3000)
//   });
// }

// async function prosesJanji() {
//   try {
//     const message = await janjiBayarHutang(false)
//     console.log(message)
//   } catch(errorMessage) {
//     console.log(errorMessage)
//   }
// }

// prosesJanji()

// 4. AJAX

// const xhr = new XMLHttpRequest();

// // GET, POST, PUT, PATCH, DELETE

// xhr.open("GET", "https://api.npoint.io/7f2effd706e8c936001b", true);

// xhr.onerror = () => {
//   console.log("Network error!");
// };

// xhr.onload = () => {
//   const parsed = JSON.parse(xhr.response);

//   console.log(parsed);
// };

// xhr.send();
