// function sayMyName(){
//     console.log("r");
//     console.log("a");
//     console.log("j");
//     console.log("u");

// }

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
  
// function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
// }

// const result=addTwoNumber(3,5)
// console.log("Result",result);

// ****************************

// function loginUserMessage(username){
//     return `$(username) just logged in`
// }

// console.log(loginUserMessage("Raju"))

// function calculateCartprice(...num1){
//     return num1
// }

// console.log(calculateCartprice(200,300))

const user={
    username:"Raju",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is $
        {anyobject.price}`);
}
// handleobject(user)
handleobject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondaryValue(getArray){
    return getArray[1]
}
