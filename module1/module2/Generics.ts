{
 
    // GENERICS
    
    // normal
    const age : number[] = [1,2,3]
    const name : string[] = ['affnan','sawad']

    // generics
    const age1 : Array<number> = [1,2,3]

    // type by generics

    type GenericNumbers<T>   = Array<T> 

    const age2 : GenericNumbers<number> = [1,2,3]
    const name3 : GenericNumbers<string> = ['affnan','sawad']

    // object
    const mySelf : GenericNumbers<{name:string,age:number}> = [
      
        {
            name: 'affnan',
            age: 20
        },
        {
            name:'affnan',
            age:4 
        }

    ]


    // GENERIC TUPLE

    type GENERIC<x,y,z> = [x,y,z]

    const tupple : GENERIC<string,number,boolean> = ['ab',1,true];
 














}