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




function grade(number){



if(number>=80 && number <=100){
    return (" A+");

}else if(number>=70 && number <=79){
    return ("A-");

}else if(number>=60 && number <=69){
    return ("A");

}else if(number>=50 && number <=59){
    return ("B");

}else if(number>=40 && number <=49){
    return ("C");

}else if(number>=33 && number <=39){
    return ("D");

}else if(number>=1 && number<=32){
    return ("Fail");
}
else{
    return ("Not a valid number")
}
}
var result = grade(40);
console.log('your result is',result);
 

// function totalHour(minutes){
//    let hours = minutes/60;
//     return hours;
// }
// const modulesHour = totalHour(2372).toFixed(2);
// console.log('total modules hour',modulesHour);


// items = ["anik","khan","kmn","asw",5,6];


// for (var i = 0; i<= items.length; i++){

//     console.log(items[i]);
// }
// year%4==0 && year%100!= 0 || year%400==0 leap year





// for(var i = 11; i <= 30; i += 2)
// {
//  var sum = sum += i;
//  console.log(sum)
// }

