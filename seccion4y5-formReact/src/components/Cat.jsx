import { useState } from "react";

const Cat = () => {

  const[cat, setCat] = useState ({name:'MangoChupado', year:5})

  const handleClick = () => {
    //Spread OP, Copia el objeto y modificamos.
    setCat({...cat, year: cat.year + 1})
  }

  return (
    <>
    <h2>Nombre: {cat.name} - Edad: {cat.year}</h2>
    <button className="btn btn-dark mb-2" onClick={handleClick}>Update Year</button>
    </>
  )
}

export default Cat;