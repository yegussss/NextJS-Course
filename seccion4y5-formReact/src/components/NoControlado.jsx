import { useRef } from "react";

const NoControlado = () => {

const form = useRef(null)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(form.current)
    //Los 3 puntos pone las entradas en un iterable - SPREAD OPERATOR.
    //Se pone corchetes para que los ponga en un mismo array
    //Transforma lista de pares key/value a un objeto.
    const {title, description, state} = Object.fromEntries([...data.entries()])
    console.log([...data.entries()])
    //Validaciones
    if (title.trim()  === '' || description.trim() === '' || state.trim() === '') {
      alert('Rellena todos los campos, por favor')
    }  
  }

  

  return (
    <form onSubmit={handleSubmit} ref={form}>

      <input 
      type="text" 
      placeholder="Ingrese sus datos"
      className="form-control mb-2"
      name="title"
      defaultValue='TODO #1'
      />

      <textarea 
      className="form-control mb2" 
      placeholder="Ingrese una descripcion."
      name="description"
      defaultValue='Descripción genérica'
      >

      </textarea>

      <select className="form-select mb2" name="state" defaultValue='complete'>
        <option value="pending">Pendiente</option>
        <option value="complete">Completado</option>
      </select>

      <button type="submit" className="btn btn-primary" name="submit">Procesar</button>

    </form>
  )
}

export default NoControlado;