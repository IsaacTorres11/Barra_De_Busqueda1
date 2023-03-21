import { useState } from "react"

const Formulario =({arreglo, agregarNombre, buscar, nombreEncontrado})=>{

    let nombre 

    //Funcion para enviar la informacion
    const enviar=(e) =>{
        e.preventDefault()
        console.log('se mando la informacion')
        agregarNombre(nombre)
    }

    //Funcion para handleChange
    const handleChange =(e)=>{
        // console.log(e.target.value)
        nombre =  e.target.value    
    }

    //Estado para buscar
    const [buscador, setBuscador] = useState('')

    //Funcion para buscar
    const handleSearching =(e)=>{
        setBuscador(e.target.value)
    }

    return(
        <div>
            <form onSubmit={enviar}>
                <input type="text" 
                placeholder="Ingresa Tu Nombre"
                onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form>

            <div>
                <ul>
                    {
                        arreglo.map((nombre, indice) =>(
                            <li key={indice}>{nombre}</li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <input type="text" placeholder="Buscar" onChange={handleSearching} />
                <button onClick={ () => buscar(buscador)}> buscar </button>

            </div>

        </div>
    )
}

export default Formulario