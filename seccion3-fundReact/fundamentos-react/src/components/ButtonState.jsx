import { useState } from "react";

const ButtonState = (text) => {

    const [count, setCount] = useState(0)
    //Engancha el estado para hacer una página de forma dinámica

    const clickManejo = () => {
      setCount(count + 1);
    }
    
  return (
    <button onClick={clickManejo}>ButtonState = {count}</button>
  )
}



export default ButtonState;