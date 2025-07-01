const mySym=Symbol("key1")
const JsUser={
    name:"Raju",
    "full name":"Raju kumar",
    [mySym]:"mykey1",
    age:18,
    location:"Bihar",
    email:"raju@google.com",
    isLoggedIn:false,
    LastLoginDay:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym])

JsUser.email="raju@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="raju@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log(`Hello JS user`);
}
JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


