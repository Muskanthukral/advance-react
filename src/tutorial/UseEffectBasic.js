import React, { useState, useEffect } from 'react'

function UseEffectBasic() { 
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('call UseEffect');
        document.title = `New Iphone(${value})` ;
    
    });
    console.log('render component')
    
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setValue(value +1)}>
             Click Me
            </button>
        </>   
    )
    
}

export default UseEffectBasic
