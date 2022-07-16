import { useState } from "react"
import { AddCategory, GifCard} from "./components";
import {BtnUpPage} from './helpers/BtnUpPage';

export const App = () => {

    const [categories, setCategories] = useState([]);

    //Aqui añado el elemento al arreglo que muestra todos los datos
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
        <div className="container mx-auto sm:px-20">
        <h1>Aplicación de Gifs</h1>
             
             <div className="">
                 <AddCategory  
                     newCategory={ addCategory }
                 />
                 <div className="flex justify-center mt-3"> 
                     <button 
                         className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 "
                         onClick={() => setCategories([])}
                     >
                         Limpiar Todo
                     </button>
                 </div>
                 
             </div>
            
             {
                 categories.map( item => (
                     <GifCard 
                     key={item} 
                     category={item} 
                     setCategories={setCategories}
                     />
                 ))
             }
        </div>
           

            <BtnUpPage />

        </>
    )
}
