var myNumber = 22;
let myNumber1 = 26;
const myNumber2 = 32;

// for (let i = 1; i < 101; i++) {
//     console.log(i);
    
// }

// function namta(number) {
//     for (let i = 1; i <= 10; i++) {
//         let calculation= number + 'X' + i + "=" + i*number
//            console.log(calculation);   
//     }
    
// }
// namta(myNumber);


// function odd (small, big) {
//     if(small<big){
//         for (let i = small; i <= big ; i++) {
//             if(i%2 !== 0){
//                 console.log(i);
//             }
        
            
//         }
//     }else{
//         for (let i = big; i <=small  ; i++) {
//             if(i%2 !== 0){
//                 console.log(i);
//             }
        
            
//         }
//     }
// }


// odd(10, 300)

// function add (abc, assm, asxn) {
//     console.log(abc+assm+asxn);
// }
// add(44, 43,54)


// function add (abc) {
//     let addNumber = 0
//     // console.log(abc[0]+abc[1]+abc[2])
//     for (let index = 0; index < abc.length; index++) {
//         let element = abc[index]
//         addNumber += element
//     }
//     console.log(addNumber)
// }
// let arr = [2,3,4,1]

// add(arr)


// function celciousToFarhennahit (Celsius) {
//     // return (Celsius * 1.8) + 32
//     var farhennahit = (Celsius * 1.8) + 32
//     return farhennahit;
// }
// console.log(celciousToFarhennahit(63))


// function ferhenahitToCelsius(ferhanahit) {
//     var celsius = (ferhanahit - 32) * 5/9 
//     return celsius
// }
// console.log(ferhenahitToCelsius(88))

// var number = 78;
// if (number<0 || number >100) {
//     console.log("this is invalid number ") 
// }
// else if(number >=80) {
//     console.log("he got A+")

// }
// else if(number >=70) {
//     console.log("he got A")

// }
// else if(number >=60) {
//     console.log("he got A-")

// }
// else if(number >=50) {
//     console.log("he got B")

// }
// else if(number >=40) {
//     console.log("he got C")

// }
// else if(number >=33) {
//     console.log("he got D")

// }
// else {
//     console.log ('fail')
// }


function interest(taka, parcentage, time) {
    let interest = ((taka*parcentage)/100) *time
    console.log(interest)
}

interest(1000, 10, 12)