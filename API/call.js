function SetUsername(username){

  this.username=username
  console.log("called");
}
function createUser(username,email,password){
  SetUsername.call(this,username)

  this.email=email
  this.password=password
}
const chai=new createUser("Raju","raju02@gamil.com","Raju@123")
console.log(chai);

