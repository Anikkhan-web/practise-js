// function anik(n){
//     return n*2;
// }
// var yes = anik(10);
// console.log(yes);


// let name = "anik khan";

// for (let i = 1; i<=4; i++){
//     console.log(i);

// }
// let i = 0;
// while(i<=4){
//     console.log(i);
//     i++
// }

// function simpleInterest(principleBalence){
//     var rateOfInterest = 14;
//     var time = 1;
//     var finalAmount = principleBalence*rateOfInterest*time/(100*12);

//     let total = (principleBalence+finalAmount);
//     // return total;
//     console.log(total);
//     return finalAmount;

    
// }
// var result = simpleInterest(50000);
// console.log(result);
// // console.log(total);




// function grade(number){



// if(number>=80 && number <=100){
//     console.log("A+");

// }else if(number>=70 && number <=79){
//     console.log("A-");

// }else if(number>=60 && number <=69){
//     console.log("A");

// }else if(number>=50 && number <=59){
//     console.log("B");

// }else if(number>=40 && number <=49){
//     console.log("C");

// }else if(number>=33 && number <=39){
//     console.log("D");

// }else if(number>=1 && number<=32){
//     console.log("Fail")
// }
// else{
//     console.log("Not a valid number")
// }
// }
// var result = grade(80);

// console.log(result); 

function totalHour(minutes){
    var hours = minutes/60;
    return hours;
}
var modulesHour = totalHour(2372).toFixed(2);
console.log(modulesHour);