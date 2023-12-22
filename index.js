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






















