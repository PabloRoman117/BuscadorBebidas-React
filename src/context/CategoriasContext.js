import  axios  from 'axios';
import React, {createContext, useState, useEffect} from 'react';

//Crear el Context

export const CategoriasContext = createContext();

//Provider es donde se esncentran las funciones y this.state.
const CategoriasProvider = (props) => {
    //Crear state del Context
    const [categorias, guardarCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async()=>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
            obtenerCategorias();
    }, [])
    

    return (
        <CategoriasContext.Provider
         value={{
            categorias
        }}>
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;