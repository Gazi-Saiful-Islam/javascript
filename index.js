// counting length using charAt()

/*

var myName = 'saiful islam'
var count = 0;
while (true) {
  if(myName.charAt(count)===''){
    break;
  }else{
    count++;
  }
}
console.log(count)

*/

//  switch

/*


var num = 2

switch (num) {
  case 3:
   console.log('it is three') 
    break;
   
  case 4:
    console.log('it is four')
  default:
    console.log('nothing')
    break;
}


*/

//    loop , switch

/*

for(let i = 0 ; i<3; i++){

  let btn = document.querySelectorAll('.btn')[i]

  btn.addEventListener('click',function(){
    let result = this.innerHTML
    console.log(result)
    alpabet(result)
  })
  
}


function alpabet(result){
  switch(result){
    
    case 'A':
      console.log('it is A')
      break;

    case 'B':
      console.log('it is B')
      break;

    case 'C':
      console.log('it is C')
      break;

    default:
      console.log('it is not  A, B or C')
      break;
      }
}

*/

// ternary operator

/*

var arr= 4
var result= arr%2===0 ? 'even' : 'odd'
console.log(result)


*/


//   loop will be stop when the random number will matched


/*

let isRuning= true

while(isRuning){
  let rand = Math.floor(Math.random()*10 + 1)
  
  if(rand===8){
    console.log('we are win ' + rand)
isRuning=false
  }else{
    console.log('you have got '+rand)
  }
}

*/



//string literal and string constructor


/*

let str = 'saiful'
console.log(str)

let str2 = String('saiful islam')
console.log(str2)

*/


//escape notation

/*


let name ='my name is \'Gazi Saiful Islam\'.it is my full name.'

console.log(name)


*/


//string comparision  (last side alphabets value more than first side alphabet value.)


/*


let first = 'acd'

let second ='abc'

if(first>second){
  console.log('true')
}else{
  console.log('false')
}

*/

//  array reverse emplement


/*

let arr =[34,45,67,43,54]

for(let i = 0; i<arr.length/2; i++){
  let temp=arr[i]
 arr[i]=arr[arr.length-1-i]
 arr[arr.length-1-i]=temp
 
}

console.log(arr)

*/

// object



/*

let men={
  name:'saiful',
  age:24,
  education:'ssc',
  village:'shalchar'
}
men.age=43
console.log(men)

men['age']=44
console.log(men)


let change='age'
men[change]=99
console.log(men)


men.country='bangladesh'
console.log(men)

console.log(men['education'])

console.log(men)


let show = 'name'
console.log(men[show])


for(me in men){
  console.log(me+': ' + men[me])
}

console.log('age' in men)

let obj = Object
obj.year=2030

console.log(obj.year)

delete men.village
console.log(men)

*/

//  OBJECT  Object comparison




/*


let obj1={
  a:34,
  b:98
}


let obj2={
  a:34,
  b:98
}

if(obj1===obj2){
  console.log('Both object are equal')
}else{
  console.log('Both are not equal')
}

*/


/*


let obj1={
  a:34,
  b:98
}


let obj2={
  a:34,
  b:98
}

if(obj1.a===obj2.a && obj1.b===obj2.b){
  console.log('Both object are equal')
}else{
  console.log('Both are not equal')
}


*/


/*

let obj1={
  a:34,
  b:98
}


let obj2={
  a:34,
  b:98
}

console.log(obj1)

console.log(JSON.stringify(obj1))

if(JSON.stringify(obj1)===JSON.stringify(obj2)){
  console.log('true')
}else{
  console.log('false')
}

*/



//Object Methods


/*


let obj={
  x:45,
  y:54,
  z:98
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


obj3= Object.assign({},obj)

console.log(obj3)


*/


// nullish (at first if else ,then ternary operaton , then nullish)


/*

let nam

console.log(typeof nam)

let fulName

if(nam !==undefined && nam !==null){
  fulName = nam
  console.log(fulName)
}else{
  console.log('not found any name')
}

*/

/*

let nam = 'Gazi Saiful Islam'

let fulName = nam !==undefined && nam !==null ? nam : 'not found'

console.log(fulName)

*/



/*


//  ( ?? )  true or false any kind of data will show

let nam = 'saiful islam'

let fulName = nam ?? 'not found any name'

console.log(fulName)

*/


/*

//  ( || ) only true data will show

let nam = 0

let fulName = nam || 'not found any name'

console.log(fulName)

*/


// Function 


/*

function myFunc(){
console.log('saiful islam')
}
  
myFunc()

function addFunc(a,b){
  let c = a+b;
  let d= a-b
  let multiply = c*d
  return multiply
}

let result = addFunc(3,5)
console.log(result)

*/


// return 


/*


let arr1 = [3,35,6,7,32]
let arr2 = [2,56,6,74,5]
let arr3 = [3,56,7,8,4]

function addition(arr){
  let sum = 0;

  for(let i = 0; i<arr.length; i++){
    sum+=arr[i]
  }
  return sum
}

let result1 = addition(arr2)
console.log(result1)



function person(name,age){
  return {
    name:name,
    age:age
  }
}

let p1= person('saiful islam',24)
console.log(p1)

*/



// function arguments


/*

function argus(){
  console.log(arguments)

  let sum= 0;

  for(let i =0; i<arguments.length; i++){
    console.log(arguments[i])
    sum+= arguments[i]

  }
  console.log('sum = ' + sum)
}

argus(3,5,6)

*/


//inner function


/*


function greeting(greet){
  function msg(msg){
    console.log(msg + ' ' +greet)
  }
  return msg
}


let greetingFunc=greeting('good morning')
greetingFunc('Gazi Saiful Islam')



function base10(b){
  function num(n){
    let sum =  1
   for(let i=1; i<=b; i++){
    sum*=n
    
   }
   return sum
  }
  return num
}

let base = base10(10)
let numb = base(2)
console.log(numb)

*/


//  scope in js


/*

var a =2

if(true){

  if(true){
    var b=4
    console.log(a)
  }
  console.log(b)
}
console.log(b)



let x= 'abc'

function alphabet(){
  let y = 34
  function letter(){
    console.log(x)
    console.log(y)
    let z = 45;      // "z" is not accseable from alphabet()
  }
  letter()
}

alphabet()      // y and z are not acceseable from global



function test(n){
  function x(){
    return n%3===0;
  }

  function y(){
    return n%5===0
  }

  if(x() && y()){
    return ('matched the number , number was ' + n )
  }else{
    return ('not matched , number was ' + n)
  }
}

let result= test(54)
console.log(result)


*/



// 1. a function can be stored in a variable




/*


function add(a,b){
  return a+b
}

let sum = add(3,5)
console.log(sum)


// 2. a function can be stored in a array

let arr = []
arr.push(add)
console.log(arr[0](5,5))

// 3. a function can be stored in a objects

let obj = {
  sum:add
  
}
console.log(obj.sum(6,7))


// 4. we can create a function as need

setTimeout(function(){
  console.log('i have created...')
}, 1000);


// 5. we can pass a function as a arguments ( higherorder function)


function addition(a,b){
  return a-b
}

function multiply(a,b,cb){
  let c = a+b
  let d = a-b

  return function() {
    let f = cb(a,b)
    return c*d*f
  }
  
}

let result = multiply(4,5,addition)


console.log(result())


*/



// 6. we can return a function from another function (callback function)



/*

function callBack(a,b,cb){
  let c = a+b
  let d = a-b

  return cb(c,d)
}

function multi(a,b){
  return a*b
}

function sum(a,b){
  return a+b
}


console.log(callBack(3,4,multi))
console.log(callBack(3,4,sum))

*/

/*


let payMent = true
let progressNum = 90


function enroll(cb){
  console.log('1. welcome to ecroll this cource')

  if(payMent){
    console.log('2. enrollment is processing...')
    setTimeout(() => {
      console.log('3. successfully enrolled')
      return cb()
    }, 2000);
  }else{
    console.log('2. enrollment is failed')
  }
}

function progress(cb){
  console.log('4. course is progressing')
  
  if(progressNum >= 80){
    console.log('5. you have got fulmarks')
    return cb()
  }else{
    console.log('5. you have not got fulmarks')
  }
}

function certificate(){
  console.log('6. you have got the certificate')
}

enroll(function(){
  progress(certificate)
})

*/


// forEach implementation


/*

let arr=[3,4,5,67,34,56,7]

arr.forEach(function(v,i,arr){
    console.log(v-2)
})

*/

/*

let arr=[3,4,5,67,34,56,7]

function myForEach(arr,cb){
  for(let i= 0; i<arr.length; i++){
    cb(arr[i])
  }
}

myForEach(arr,function(v){
  console.log(v+4)
})

*/


// map implementation (map return new array)


/*

let arr = [3,12,456,78,5]

let arr2 = arr.map(function(v,i,arr){
  return v+4
})
console.log(arr)
console.log(arr2)


*/


/*
let arr = [3,12,456,78,5]


function myMap(arr,cb){
  let newArr = []

  for(let i= 0; i<arr.length; i++){
    let result =cb(arr[i],i,arr)
    newArr.push(result)
  }
  return newArr
}

let sum =myMap(arr,function(v){
  return v+3
})


let sq =myMap(arr,function(v){
  return v*v
})

console.log(arr)
console.log(sum)
console.log(sq)

*/


// filter implementation


/*

let arr =[45,4,23,654,3423]

arr.filter(function(v){
  if(v%2 == 0){
    console.log(v)
  }
})

*/

/*


let arr =[45,4,23,654,3423]

function myFilter(arr,cb){
  let newArr=[]
  for(let i=0; i<arr.length; i++){
    if(cb(arr[i],i,arr)){
      newArr.push(arr[i])
    }
  }
  return newArr
}

let result = myFilter(arr,function(v){
  return v%2 ===0
})

console.log(result)
console.log(arr)

*/


// reduce function implementation


/*

let arr =[43,12,4,56,77,,5434,,23]

let sum = arr.reduce(function(prev,curr){
return (prev+curr)
},100)

let myMax = arr.reduce(function(p,c){
  return Math.max(p,c)
})

console.log(sum)
console.log(myMax)

*/

/*

let arr =[43,12,4,56,77,5434,23]

function myReduce(arr,cb,acc){
  for(let i=0; i<arr.length; i++){
    acc=cb(acc,arr[i])
  }
  return acc
}

let sum = myReduce(arr,function(p,c){
  return p+c
},0)

console.log(sum)

*/


// find and findIndex function implementation


/*

let arr =[43,12,4,56,77,5434,23]

arr.find(function(v){
  if(v===56){
    console.log(v)
  }
})

arr.findIndex(function(v,i){
  if(v===56){
    console.log(i)
  }
})

*/

/*


let arr =[43,12,4,56,77,5434,23]

function myFind(arr,cb){

  for(let i = 0; i<arr.length; i++){
    if(cb(arr[i])){
      return arr[i]     // findIndex (return i)
    }
  }
  
}

let result1 = myFind(arr,function(v){
  return v===77
})

console.log(result1)

*/


// sort , every and some function


/*

let person = [
  {
    name: 'saiful',
    age: 24
  },
  
  {
    name: 'akib',
    age: 10
  },
  
  {
    name: 'mohammad',
    age: 119
  },
  
  {
    name: 'rakibul',
    age: 27
  }
]

let arr = [1,3,5,2,7,5,6,8,8,9,4,344,667]

person.sort()
console.log(person)

arr.sort()
console.log(arr)

person.sort(function(a,b){
  if(a.age > b.age){
    return 1
  }else if(a.age < b.age){
    return -1
  }else{
    return 0
  }
})

arr.sort(function(a,b){
  if(a > b){
    return 1
  }else if(a < b){
    return -1
  }else{
    return 0
  }
})

console.log(arr)
console.log(person)

*/

/*

let arr = [34,354,675,3,67,4,2,0,-3]

let result = arr.some(function(v){
  return v > 3424
})

console.log(result)


let result1 = arr.every(function(v){
  return v >= 0
})

console.log(result1)

*/

 
//recursive function


/*


function msg(n){
  if(n===0){
    return 0
  }
  console.log('my name is saiful islam')

  msg(n-1)
}

msg(10)


function sum(n){
  if(n===0){
    return 0
  }

  return n += sum(n-1)
}

console.log(sum(5))


function fact(n){
  if(n===1){
    return 1
  }

  return n*fact(n-1)
}

console.log(fact(4))


function add(n){
  if(n===5){
    return 5
  }

  return n+= add(n+2)
}

console.log(add(1))



let arr = [4,3,65,76,8,3]

function arrSum(arr,index){
  if(index >= arr.length){
    return 0
  }

  return arr[index] + arrSum(arr, index+1)
}

console.log(arrSum(arr,0))


*/