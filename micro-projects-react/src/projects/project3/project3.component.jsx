import React, { useState } from "react";

function Project3() {
  // Declare a new state variable, which we'll call "count"
  const [counter, setCounter] = useState(0);

  //custom functions
  let IncrementValue = () => {
    setCounter(counter + 1);
  };

  let DecrementValue = () => {
    setCounter(counter - 1);
  };

  let DisplayValue = (value) => <p>{value}</p>;

  return (
    <>
      <h3>
        PROJECT 3 - Increment and Decrement Value, functional component and
        useState
      </h3>
      <h3>{DisplayValue(counter)}</h3>
      <button onClick={IncrementValue}>Click to increment by 1</button>
      <button onClick={DecrementValue}>Click to decrement by 1</button>
      <h3>-------------------------------------------------------------</h3>
    </>
  );
}

export default Project3;
