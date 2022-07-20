import { useState } from "react";


export const SearchInput = ({ addCategory, setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    //Actualización del input de búsqueda
    const handleChange = ({ target }) => {

        //restringe caracteres especiales en el input. (Solo letras, numeros y espacios)
        let dataInput = new RegExp(/^[A-Za-z0-9\s]+$/g);
        let res = dataInput.test(target.value)

        if ((res || target.value === '') && target.value.length < 20) {
            setInputValue(target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //valida que tenga al menos 2 caracteres
        if (inputValue.trim().length < 2) return;

        //envío la categoria al padre.
        addCategory(inputValue.trim());
        setInputValue(''); //limpio input
    }


    const handleCleanAll = () => {
        setCategories([]);
        setInputValue('');
    }

    return (
        <>
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
                    onClick={handleCleanAll}
                >
                    Limpiar Todo
                </button>
            </div>
        </>



    )
}
