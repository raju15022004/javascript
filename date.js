let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2025,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString())

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
newDate.toLocaleString('default',{
    weekday:"long",
})