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











