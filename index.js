class Cat {
    constructor(name,sex){
       this.name = name
       this.sex = sex 
    }

     speak() {
        return `${this.name} says meow!`
    }
  }
   
  class Dog {
    constructor(name,sex){
        this.name = name
        this.sex = sex 
     }

     speak() {
        return `${this.name} says woof!`
    }
  }
   
  class Bird {
    constructor(name,sex){
        this.name = name
        this.sex = sex 
     }
     speak() {
        // let male = `It's me! ${this.name}, the parrot!`
        // let female = `${this.name} says squawk!`
        return  this.sex === "male" ?  `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`
    //     if (this.sex === "male") {
    //         return `It's me! ${this.name}, the parrot!`
    // }else {
    //     return `${this.name} says squawk!`
    // }
  }
}