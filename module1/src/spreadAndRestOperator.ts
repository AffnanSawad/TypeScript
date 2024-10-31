{

// spread operator

const array1 : string[] = ['a','b', 'c']
const array2 : string[] = ['d','e', 'f']

array1.push(...array2);


const Affnan = {
 
    name: 'affnan',
    age : 20
}

const Mamdud = {
 
    name: 'mamdud',
    age : 20
}

const bothers = {  

 ...Affnan,
 ...Mamdud

}



// REST OPERATOR

const greetFriends = ( ...friends : string[])=> {
 

    friends.forEach( (friends : string) => console.log(`Hi ${friends}`)   )


}

greetFriends('abul', 'kabul', 'chabul','bulbul');



}





