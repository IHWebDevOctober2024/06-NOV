import { useState } from "react";

function Example1() {
  const [number, setNumber] = useState(0); // the first element is the name of the variable and the second is the name of the FUNCTION THAT UPDATES THE VALUE OF THE VARIABLE.
  // Inside the prenthesis (argument) We add the initial value
  const [name, setName] = useState("Marina");
  /* 
   // this works but we don't see the update in the DOM
    let numberLet = 0;
  
    function increaseNumber() {
      numberLet++;
      console.log(numberLet);
    } */

  console.log("THE COMPONENT EXAMPLE1 IS UPDATED");

  function increaseNumber() {
    setNumber(number + 1);
  }

  function changeName() {
    setName((previousValue) => {
      // we can also check the previous value of the state
      console.log("The previous value was: ", previousValue);
      return "Oriol";
    });
  }

  return (
    <>
      <h1>Hello STATE {number}</h1>
      <button onClick={increaseNumber}>Increase</button>
      <h1>Welcome {name}</h1>
      {/* <button onClick={() => setName("Oriol")}>Change NAME</button> */}
      <button onClick={changeName}>SET NAME TO MICA</button>
    </>
  );
}

export default Example1;
