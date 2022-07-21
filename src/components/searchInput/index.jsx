import { useForm } from "../../hooks";

export const SearchInput = ({ addCategory, setCategories }) => {

    const { inputs, handleChange, handleReset, inputSearch } = useForm({ 
        inputSearch: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        //envío la categoria al padre.
        addCategory(inputSearch.trim());
        handleReset();
    }


    const handleCleanAll = () => {
        setCategories([]);
        handleReset();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-center">
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={inputSearch}
                    name='inputSearch'
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
