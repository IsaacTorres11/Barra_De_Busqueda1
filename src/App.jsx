import Formulario from "./Componentes/Formulario"

import { useState } from "react"

function App() {

const [arreglo, setArreglo] = useState([])

const agregarNombre=(nombre)=>{
  setArreglo ([...arreglo, nombre])
}

let  nombreEncontrado
const buscar =(buscador) =>{
  nombreEncontrado = arreglo.filter( nombre =>  nombre === buscador)
}

  return (
    <div className="App">
     <h1>Practica barra De Busqueda</h1>
     <Formulario  arreglo={arreglo} agregarNombre={agregarNombre} buscar={buscar} nombreEncontrado={nombreEncontrado}/>
    </div>
  )
}

export default App
