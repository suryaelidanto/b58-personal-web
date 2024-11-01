// 1. CUSTOM HOF

// function sayHello() {
//     console.log("Hello, apa kabar?")
// }

// function sayGoodMorning() {
//     console.log("Hello, selamat pagi!")
// }

// function printWithTimeout(cb) {
//     console.log("Waiting for device...")
//     console.log("Found device : X")
//     console.log("Start printing...")
//     setTimeout(() => {
//         cb()
//         console.log("Finish printing!")
//     }, 3000)
// }

// printWithTimeout(sayGoodMorning)

// SISTEM PURCHASE

// function discount25(price) {
//     return price - (price  * 25 / 100)
// }

// function discount50(price) {
//     return price - (price  * 50 / 100)
// }

// function discount100(price) {
//      return price - (price  * 100 / 100)
// }

// function purchase(price, callback) {
//     const discountedPrice = callback(price)
//     console.log(`Final price : ${discountedPrice}`)
// }

// purchase(5000, discount100)

// function purchaseWithDiscount25(price) {
//     const discountedPrice = price - (price  * 25 / 100)
//     console.log(`Final price : ${discountedPrice}`)
// }

// function purchaseWithDiscount50(price) {
//     const discountedPrice = price - (price  * 50 / 100)
//     console.log(`Final price : ${discountedPrice}`)
// }

// function purchaseWithDiscount100(price) {
//     const discountedPrice = price - (price  * 100 / 100)
//     console.log(`Final price : ${discountedPrice}`)
// }

// purchaseWithDiscount100(5000)

// 2. HOF BUILT-IN

// 0. PROCEDURAL
// const numbers = [1,2,3,4,5,6,7,8,9,10]


// let result = 0

// for(let index = 0; index < numbers.length; index++) {
//     result += numbers[index]
// }

// console.log(result)

// 1. FOREACH

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// let result = 0

// numbers.forEach((number) => {
//   result += number
// })

// console.log(result)

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// let doubledNumber = []

// numbers.forEach(number => {
//   doubledNumber.push(number * 2)
// })

// console.log(doubledNumber)

// 2. MAP

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const doubledNumbers = numbers.map(number => {
//     return number * 2
// })

// let result = 0

// doubledNumbers.forEach((doubledNumber) => {
//     result += doubledNumber
// })

// console.log(result)

// 3. FILTER

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const oddNumbers = numbers.filter((number) => {
//   if(number % 2 == 1) return true
  
//   return false
// })

// console.log(oddNumbers)

// CASE FILTER : SCREENING PROFIL KANDIDAT

// const candidates = [
//   {
//     name: "A",
//     score: 70,
//     expectedSallary: 500,
//     prefferedPosition: "Fullstack",
//   },
//   {
//     name: "B",
//     score: 40,
//     expectedSallary: 200,
//     prefferedPosition: "Fullstack",
//   },
//   {
//     name: "C",
//     score: 90,
//     expectedSallary: 1500,
//     prefferedPosition: "Backend",
//   },
//   {
//     name: "D",
//     score: 80,
//     expectedSallary: 700,
//     prefferedPosition: "Fullstack",
//   },
// ];

// const criteria = {
//   score: 70,
//   expetedSallary: 1000,
//   prefferedPosition: "Frontend",
// };

// const passCandidates = candidates.filter((candidate) => {
//   if (
//     candidate.score >= criteria.score &&
//     candidate.expectedSallary <= criteria.expetedSallary &&
//     (candidate.prefferedPosition == criteria.prefferedPosition || candidate.prefferedPosition == "Fullstack")
//   )
//     return true;

//   return false;
// });

// console.log(passCandidates)

// 4. REDUCE

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const sum = numbers.reduce((prev, curr) => {
//       return prev + curr
// }, 0)

// console.log(sum)
