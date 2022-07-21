import { useState } from "react"
import { BtnUpPage } from './tools/BtnUpPage';
import { GifCard, SearchInput } from './components/index'

export const App = () => {

    const [categories, setCategories] = useState([]);

    const addCategory = inputValue => {

        //Compruebo que la nueva categoría no exista en el array
        const existCategory = categories.some(cat => (
            cat.toLowerCase() === inputValue.toLowerCase()
        ));

        //Si la nueva categoria NO existe dentro del array, se agrega
        if (!existCategory) setCategories([inputValue, ...categories]);
    }

    return (
        <>
            <div className="container mx-auto sm:px-20">
                <h1>Aplicación de Gifs</h1>


                <SearchInput
                    addCategory={addCategory}
                    categories={categories}
                    setCategories={setCategories}
                />

{/* {
                categories.map(item => (
                    <ul key={item}>
                        <li><a href="">{item}</a></li>
                    </ul>
                ))
            } */}


                {
                    categories.map(item => (
                        <GifCard
                            key={item}
                            category={item}
                            categories={categories}
                            setCategories={setCategories}
                        />
                    ))
                }
            </div>


            <BtnUpPage />

        </>
    )
}
