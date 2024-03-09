/*
-No importa cómo lo llamemos en default, va sin llaves
-En nombradas se ponen las llaves con la función exactamente igual
-Para comentar dentro del ReactDOM, se ponen llaves y el modulo en medio
de un bloque para comentar.
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import Prueba from './prueba.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/*<Prueba/>*/}
  </React.StrictMode>,
)
