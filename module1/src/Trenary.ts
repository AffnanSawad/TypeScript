{
    
    // Ternary, optional chaining & nullish coalescing operator


    // ternary
    const age : number = 19

    const adult = age >=18 ? 'Adult' : 'Baby'

    console.log(adult);


    // nullish operator => jate result null / undefine dekai,

    const authentication = null ;

    const result = authentication ?? "Guest User"

    console.log(result);
    // ANSWER : Guest User .

    // optional chaining
    type Student = {

        name : string ;
        age : number;
     }

     const affnan : Student = {
        name:'Affnan',
        age : 22
          
     }

     const realAge = affnan?.age ?? 'No Age'



















}