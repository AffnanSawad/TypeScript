{//  DESTRUCTURING => 1. ARRAY ; 2.OBJECT.

// ARRAY

const array = ['john Snow', 'Sansa', 'Joffery']

const [a,b,c] = array;

// first 2 value skip and bakigula ekta variable e thakbe.

const array1 = ['john Snow', 'Sansa', 'Joffery', 'tyron lannester', 'bran stark']

const [,, ...rest] = array1


//  OBJECT DESTRUCTURING

const Personal = {
  
    Name : 'Affnan Sawad',

    address : {
      
        Present : 'Khulshi',
        Permanent: 'Sandwip'
    },
    contact_No : '01881640'

}

const { Name , address:{Permanent}   } = Personal;

// Property name change korte hoile evabe korte hbe
const { Name : my_Name , address:{Permanent : PermanentAddress}   } = Personal;


}