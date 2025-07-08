const { use } = require("react");

const PromiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task is compelete");
    resolve()
  }, 1000)
})

PromiseOne.then(function(){
  console.log("promise consumed");
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve()
  },1000)
}).then(function(){
  console.log("Async 2 reolved");
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username:"Raju", email:"raju032004@gmail.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false
    if (!error){
      resolve({username:"Raju",password:"123"})

    }
    else{
      reject('ERROR: Something went wrong')
    }
  },1000)
})

promiseFour.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("The promise is either resolve or rejected"))
