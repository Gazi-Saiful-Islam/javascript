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













































