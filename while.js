let index=0
while(index<=10){
  // console.log(`value of index is ${index}`);
  index=index+2
}

let myArray=["flash","batman","superman"]

let arr=0
while(arr < myArray.length){
  // console.log(`value is ${myArray[arr]}`);
  arr=arr+1
}

// for of
// map

const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

const coding=["js","ruby","java","python","cpp"]
coding.forEach(function (val){
  // console.log(val);

})

const mycoding=[
  {
    languagename:"javascript",
    languageFileName:"js"
  },{
    languagename:"jav",
    languageFileName:"js"
  },{
    languagename:"python",
    languageFileName:"js"
  },
]

mycoding.forEach((item)=>{
  console.log(item.languageFileName);
})

