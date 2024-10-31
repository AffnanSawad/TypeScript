//  Function => 1. Normal ; 2. Arrow

function addnum( num1 : number , num2 : number) : number {

 return num1 + num2 ;

}

addnum(2,4);


// arrow function

const add = ( num1 : number , num2 : number ) : number => { return num1 + num2 }

//  object => funcyion => METHOD

const total = {
  
    myName : 'Affnan',

    balance : 0 ,

    addBalance( balance : number) : string {

        return ` MY TOTAL BALANCE IS ${this.balance + balance}`
    
    }


}



// ARRAY
const arr : number[] = [1,2,3]

const newarr : number[] = arr.map( (item : number) : number => item * item )