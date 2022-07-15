import { useState } from "react"
import { AddCategory, GifCard} from "./components";


export const App = () => {

    const [categories, setCategories] = useState([]);

    const addCategory = (newCategory) => {

        //Compruebo que la nueva categoría no exista en el array
        const existCategory = categories.some( cat => (
            cat.toLowerCase() === newCategory.toLowerCase()
        ));

        //Si la nueva categoria NO existe dentro del array, se agrega
        if( !existCategory ) setCategories([ newCategory, ...categories]);
        // setCategories( cat => [newCategory, ...cat] );
    }

    return (
        <>
            <h1>Aplicación de Gifs</h1>


            <AddCategory  
                newCategory={ addCategory }
            />
     
            {
                categories.map( item => (
                    <GifCard key={item} category={item} setCategories={setCategories}/>
                ))
            }

        </>
    )
}
