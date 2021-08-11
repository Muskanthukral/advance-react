import React, {useState} from 'react'

function UseStateBasic()  {
   const [day, setDay]= useState("Today is a good day");
   const handleClick = () => {
       if (day=="Today is a rainy day") {
        setDay("Today is a very bright and good day")
       }
       else {
        setDay("Today is bright day")
       }
   };
    return(
     <div>
         <>
         <h2>{day}</h2>
         <button type="button" className="btn" onClick={handleClick} > 
         Change my day
         </button>
        </>
        </div>

    );
};

export default UseStateErrorEx