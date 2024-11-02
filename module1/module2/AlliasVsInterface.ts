{
 
//   ALLIAS VS INTERFACE

// Allias
type numbers11 = number[] ;

const number1 : numbers11 = [1,2,3];

//  interface
interface numbers222{

    [index : number] : number 
}
const number2 : numbers222 = [1,2,3];


// allias
type sum = (num1 : number , num2 : number) => number ;

const summation : sum = (num1,num2) => num1 + num2 ;

// Interface

interface sum2{

    ( a1 : number , a2 : number ) : number 
}

const summation2 : sum2 = (num1,num2) => num1 + num2 ;







}