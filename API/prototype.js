let myHeros = ["thor","spiderman"]

let heroPower = {
  thor:"hammer",
  spiderman:"sling",

  getSpiderPower:function(){
    console.logI(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.raju = function(){
  console.log(`raju is present in all objects`);
}

// heroPower.raju()

// inheritance

const User = {
  name:"raju",
  email:"raju@google.com"
}

const Teacher = {
  makeVideo:true
}

const TeachingSupport = {
  isAvailable:false
}

const TASupport = {
  makeAssigment:'js assignment',
  _proto_:TeachingSupport
}

Teacher._proto_ = User

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "raju      "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
