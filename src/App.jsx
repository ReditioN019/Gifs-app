import { useState } from "react"
import { BtnUpPage } from './helpers/BtnUpPage';
import { GifCard } from './components/index'

export const App = () => {

    const [categories, setCategories] = useState([]);

    const addCategory = inputValue => { //! ADD búsqueda al array

        //Compruebo que la nueva categoría no exista en el array
        const existCategory = categories.some(cat => (
            cat.toLowerCase() === inputValue.toLowerCase()
        ));

        //Si la nueva categoria NO existe dentro del array, se agrega
        if (!existCategory) setCategories([inputValue, ...categories]);
    }

    //?=============================================================================
    //?=============================================================================
    const [inputValue, setInputValue] = useState('');

    //Actualización del input de búsqueda
    const handleChange = ({ target }) => {

        //restringe caracteres especiales en el input. (Solo letras, numeros y espacios)
        let dataInput = new RegExp(/^[A-Za-z0-9\s]+$/g);
        let res = dataInput.test(target.value)

        if (res || target.value === '') setInputValue(target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //valida que tenga al menos 2 caracteres
        if (inputValue.trim().length < 2) return;

        //envío la categoria al padre.
        addCategory(inputValue.trim());
        setInputValue(''); //limpio input
    }


    return (
        <>


            <div className="container mx-auto sm:px-20">
                <h1>Aplicación de Gifs</h1>

                <div className="">
                    <form onSubmit={handleSubmit} className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Buscar Gifs"
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </form>


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
                    categories.map(item => (

                        <div key={item}>

                            <GifCard
                                category={item}
                                categories={categories}
                                setCategories={setCategories}
                            />
                        </div>

                    ))
                }
            </div>


            <BtnUpPage />

        </>
    )
}
