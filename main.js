// duplicate

// const names = ['anik','khan','arr','gray','anik','khan'];

// function removeDuplicate(names){

// const unique = [];

// // for (let i = 0; i<names.length; i++){
// //     const element = names[i];
// //     console.log(element);
// // }
// for (const element of names){

//     console.log(element);
//     if(unique.indexOf(element)== -1){
//         unique.push(element);
//     }

// }
// return 
// }
// const unique


// reverse

// var gretings = "hello how are you"

// function  reverseString(text){
//     let reverse = '';

//     for(const letter of text){
//         console.log(letter);
//         reverse = letter + reverse;
//     }
// }
// const reversed = reverseString(gretings);
// console.log(reversed);

// function mx(au) {
//     return Math.max(au, an, ak);
// }
// var au = 10, an = 20, ak = 15;
// console.log(mx(au));

// sum=0; 
// for( let i = 0; i<=3;i++){
//      sum = sum + i; 
//      console.log(sum);
//     }




// var rows = 5;

// for(var i=1; i <=rows;i++){
//      for(var j=1;j<=i;j++){
          
//                console.log("* ");
          
//      }
//      console.log("<br/>");
// }


// function largestElement(numbers) {
//      let min = numbers[0];
//      for(var i=1;i < numbers.length;i++){
        
//           var element =  numbers[i];
       
//           if(element < min){
//                min = element;
//           }
//      }
//       return min;
// }
// var age = [112,22,20,44,66,88,90,111];
// const minimum =largestElement(age);
// console.log(minimum);
 

const greetings = 'hello, how are you?';


 function reverseString(text) {
      let reverse= '';
      for(const letter of text){
           console.log(letter)
          reverse = letter + reverse ;

      }
      return reverse;
 }
 const reversed = reverseString(greetings);
 console.log(reversed);