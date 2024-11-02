{
 
    // Type Assertion

    let anything : any ;

    anything = 'Level 2' ;
    anything = 1 ;

    (anything as number);


    // 
    const kgToGm = ( value : string | number ) : string | number | undefined => {
     
        if(typeof value === 'string'){

            const result = parseFloat(value) * 1000 

            return result ;
        }
        if( typeof value === 'number'){

            return value * 1000 ;
        }

    }

    const input = kgToGm(100) as number
    const input1 = kgToGm('me') as string




}