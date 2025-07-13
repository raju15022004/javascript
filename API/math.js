// const chai={
//   name:'ginger chai',
//   price:250,
//   isAvailable:true
// }

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.definePropertie(chai,'name',{
//   Writable:false,
//   enumberable:false

// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


class user{
  constructor(email,password){
    this.email=email
    this.password=password
  }

  get password(){
    return this.password.toUpperCase()
  }
}

const Raju = new user("raju@gmail.com","123")
console.log(Raju.password);
