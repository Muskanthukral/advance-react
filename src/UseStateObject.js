import React, {useState} from 'react'

function UseStateObject() {

  const [person, setPerson] = useState({
    name:"Star",
    age: 20,
    message: "I am a star",

  });
   const [name,setName] = useState("Tony")

   const [age,setAge] = useState(20)

   const [message,setMessage] = useState("I am tony")

   


  const changeMessage = () => {
      setPerson({...person, message:"not anymore"});
      setMessage("Hello world");
  }
  return(
      <div>
          <>
          <h3>{name}</h3>
          <h3>{age}</h3>
          <h3>{message}</h3>
          <button className="btn" onClick={changeMessage}> Change my message</button>
          </>
      </div>
  )

}

export default UseStateObject