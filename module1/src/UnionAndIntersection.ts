
{
    // Union Developer
    type FrontEnd = 'Junior' | 'Senior'

    const MySelf : FrontEnd = "Junior" 

   type User = {
    name : string ;
    gender : 'Male' | 'Female'
   }

   const user1 : User = {
    name : 'Affnan',
    gender: 'Male'
   }


//    InterSection

type FrontEndDeveloper = {

    skilss : string[];
    desigination1 : 'Senior' 
}

type BackEndDeveloper = {

    skilss : string[];
    desigination2 : 'Junior' 
}

type MySelf1 = FrontEndDeveloper & BackEndDeveloper 

const Affnan : MySelf1 = {

    skilss : ['Html','CSS'],
    desigination1:'Senior',
    desigination2: 'Junior'
}




}