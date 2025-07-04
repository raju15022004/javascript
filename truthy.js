const userEmail=[]

if(userEmail){
  console.log("Got user email");
}
else{
  console.log("Don't have user email");
}

// falsy values

const emptyobj={}

if(Object.keys(emptyobj).length === 0){
  console.log("object is empty");
}

let val1;
val1=5??10

console.log(val1);
