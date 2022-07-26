import { useReducer } from "react"
import { BtnUpPage } from './tools/BtnUpPage';
import { GifCard, SearchInput } from './components/index'
import { gifAppReducer } from "./helpers/gifAppReducer";

export const App = () => {

    const [categorias, dispatch] = useReducer(gifAppReducer, [])


    const handleNewCategory = inputValue => {
        //Comprueba que la nueva categoría no exista en el array
        const existCategory = categorias.some(cat => (
            cat.toLowerCase() === inputValue.toLowerCase()
        ));

        //Si la nueva categoria NO existe dentro del array, se agrega
        if (!existCategory) {
            dispatch({
                type: 'Add Category',
                payload: inputValue
            });
        }  
    }

    const handldeRemoveCategory = category => {
        dispatch({
            type: 'Remove Category',
            payload: category
        });
    }

    const handleRemoveAllCategories = () => {
        dispatch({
            type: 'Remove All Categories'
        });
    }

    return (
        <>
            <div className="container mx-auto sm:px-20">
                <h1>Aplicación de Gifs</h1>

                <SearchInput
                    handleNewCategory={handleNewCategory}
                    categories={categorias}
                    handleRemoveAllCategories={handleRemoveAllCategories}
                />

                {
                    categorias.map((item) => (
                        <GifCard
                            key={item}
                            category={item}
                            handldeRemoveCategory={item => handldeRemoveCategory(item)}
                        />
                    ))
                }
            </div>


            <BtnUpPage />
        </>
    )
}
