import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { MdCleaningServices } from 'react-icons/md';

export const GifCard = ({ category, setCategories }) => {
    
    const { images, isLoading } = useFetchGifs( category );   

    const handleClick = () => setCategories([])
    
   
    return (
        <>
            <div className="flex justify-between items-center">
                <h3>{category.toUpperCase()}</h3>
                <button 
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
                    type="button"
                    onClick={handleClick}
                >
                    <MdCleaningServices color='white' size='1.1rem' /> 
                    <span className="ml-3">Limpiar</span> 
                </button>
            </div>
            
            {/* Otra manera de crear un loading es crear un componente <LoadingMessage isLoading={isLoaading} />
                En este componente internamente hace la logica necesaria para mostrarla.
            */}
            {
                isLoading && <h2>Cargando...</h2>
            }
            
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {
                    images.map( img => (
                        <GifItem 
                            key={ img.id } 
                            { ...img } //envio como props todos los elementos que contiene img
                        />            
                    ))
                }   
            </div>
        </>
    )
}
