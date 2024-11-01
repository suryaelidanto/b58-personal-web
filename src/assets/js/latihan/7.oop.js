// // 1. CLASS
// class Dog { // PascalCase
//     // global properties
//     name = ""
//     color = ""
//     eyeColor = ""
//     height = 0
//     length = 0
//     weight = 0
    
//     constructor(name, color, eyeColor, height, length, weight) {
//         this.name = name
//         this.color = color
//         this.eyeColor = eyeColor
//         this.height = height
//         this.length = length
//         this.weight = weight
//     }
    
//     // global methods
//     sit() {
//         console.log(`${this.name} is sitting`)    
//     }
    
//     description() {
//         const sentence = 
//         `Name : ${this.name}\nColor: ${this.color}\nEye Color : ${this.eyeColor}\nHeight : ${this.height}\nLength : ${this.length}\nWeight : ${this.weight}
//         `
//         console.log(sentence)
//     }
    
//     layDown() {
//         console.log("Dog is laying down")
//     }
    
//     shake() {
//         console.log("Dog is shaking")
//     }
    
//     come() {
//         console.log("Dog is coming")
//     }
// }

// // 2.OBJECT / INSTANCE

// const bobby = new Dog("Bobby", "Red", "Black", 20, 100, 25)

// bobby.description()

// const helly = new Dog("Helly", "Green", "Brown", 22, 150, 30)

// helly.description()

// 3. INHERITANCE
// class Animal {
//     brain = true
//     legs = 0

//     constructor(brain, legs) {
//         this.brain = brain
//         this.legs = legs

//         this.initAnimal()
//     }

//     initAnimal() {
//         console.log("Initializing animal...")
//         // proses apa
//         console.log("Initialing successful!")
//     }
// }

// class Human extends Animal {
//     hands = 0

//     constructor(brain, legs, hands) {
//         super(brain, legs)
//         this.hands = hands
//     }

//     description() {
//         console.log(this.brain, this.legs, this.hands)
//     }
// }

// class Pet extends Animal {
//     legs = 4
//     fleas = 0
// }

// class Dog extends Pet {
//     fleas = 8
// }

// class Cat extends Pet {
//     fleas = 4
// }

// const anto = new Human(true, 4, 2)
// anto.description()

// 4. POLYMORPHISM

// class Animal {
//     speak() {
//         throw new Error("use class Dog, Duck, or Cat to use speak() method!")
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Woof!")
//     }
// }

// class Duck extends Animal {
//     speak() {
//         console.log("Qwack!")
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Miaw miaw miaw miaw!")
//     }
// }

// const animal = new Cat()
// animal.speak()

// 5. ABSTRACTION 


// class Phone {
//     #battery = 0
//     #signal = 0
    
//     constructor(battery,signal) {
//         this.#battery = battery
//         this.#signal = signal
//     }
 
//      connectWifi() {
//          if(this.#battery > 50 && this.#signal > 60) {
//              this.#connectWifiSuccess()
//          } else {
//              this.#connectWifiFailed()
//          }
//      }
     
//      #connectWifiSuccess() {
//          console.log("Connect wifi success!")
//      }
     
//      #connectWifiFailed() {
//          console.log("Connect wifi failed!")
//      }
     
//      openApplication(application) {
 
//      }
//  }

//  const xiaomi = new Phone(55, 70)
//  xiaomi.connectWifi()

// 6. ENCAPSULATION

// class Invoice {
//     #name = ""
//     #price = 0
    
//     constructor(name, price) {
//         this.#name = name
//         this.#price = price
//     }
    
//     printInvoice() {
//         console.log(`===Invoice===\nName: ${this.#name}\nPrice:${this.#price}`)
//     }
// }

// const invoice1 = new Invoice("Sepatu XYZ", 20000)

// invoice1.price = 100
// invoice1.printInvoice()

// class Invoice {
//     #name = ""
//     #price = 0
    
//     constructor(name, price) {
//         this.#name = name
//         this.#price = price
//     }
    
//     get name() {
//       return `Product name : ${this.#name}`
//     }
    
//     get price() {
//         return `Price : ${this.#price}`
//     }
    
//     set name(value) {
//         this.#price = value
//     }
    
//     set price(value) {
//         if(value <= 0) {
//             throw new Error("Price cannot be <= 0")
//         }
        
//         this.#price = value
//     }
    
//     printInvoice() {
//         console.log(`===Invoice===\nName: ${this.#name}\nPrice:${this.#price}`)
//     }
// }

// const invoice1 = new Invoice("Sepatu XYZ", 20000)

// invoice1.price = -100

// console.log(invoice1.name)
// console.log(invoice1.price)



