import React,{ useState } from 'react'

function UseStateErrorEx() {

    let title ="random title";
    const handleClick = () =>{
        
        title="My name is Muskan";
        console.log(title);
    }

    return (<React.Fragment>
     <h2>{title}</h2>
     <button type="button" className="btn" onClick={handleClick} > 
     Change title
     </button>
    </React.Fragment>
    
    );
};

export default UseStateErrorEx
