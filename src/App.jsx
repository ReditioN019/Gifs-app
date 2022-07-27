import { useContext } from "react"
import { BtnUpPage } from './tools/BtnUpPage';
import { GifCard, SearchInput } from './components/index'
import { GifContext } from "./context/GifContext";

export const App = () => {

    const { categorias } = useContext( GifContext );
    
    return (
        <>
            <div className="container mx-auto sm:px-20">
                <h1>Aplicación de Gifs</h1>
                <SearchInput />
                
                {
                    categorias.map((item) => (
                        <GifCard
                            key={item}
                            categoria={item}
                        />
                    ))
                }
            </div>


            <BtnUpPage />
        </   >
    )
}
