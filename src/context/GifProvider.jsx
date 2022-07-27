import { useEffect } from "react";
import { useReducer, useState } from "react"
import { gifAppReducer } from "../helpers/gifAppReducer";
import { useFetch } from "../hooks";
import { GifContext } from "./GifContext"


export const GifProvider = ({ children }) => {

    const [ categorias, dispatch ] = useReducer( gifAppReducer, [] );
    const [ category, setNewCategory ] = useState();

    // const { images, loading, errorSearch } = useFetch(category);

    //!Añade una nueva categoria a la lista
    const handleNewCategory = newCategory => {

        //Comprueba que la nueva categoría no exista en el array
        const existCategory = categorias.some(cat => (
            cat.toLowerCase() === newCategory.toLowerCase()
        ));

        //TODO -ANTES DE INGRESAR ELEMENTO, VALIDAR QUER SI NO SE ENCUENTRA LA BUSQUEDA, NO SE AGREGA AL ARRAY

        // Si la nueva categoria NO existe dentro del array, se agrega
        if (!existCategory) {
            dispatch({
                type: 'Add Category',
                payload: newCategory
            });
        }  
    }

   //!Quita una categoría específica
    const handldeRemoveCategory = category => {
        dispatch({
            type: 'Remove Category',
            payload: category
        });
    }


    //! Quita todas las categorías
    const handleRemoveAllCategories = () => {
        dispatch({
            type: 'Remove All Categories'
        });
    }

    
    return ( 
        <GifContext.Provider value={
            { 
                // category,
                setNewCategory, 

                // images, 
                // loading, 
                // errorSearch,
                
                categorias, //la envio al App.js para recorrer el arreglo de categorias

                handleNewCategory,
                handldeRemoveCategory,
                handleRemoveAllCategories
            }
        }> 
            { children }
        </GifContext.Provider>
    )
}
