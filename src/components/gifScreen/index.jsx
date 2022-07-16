import { GifItem } from './GifItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { BtnRemoveGifs } from './BtnRemoveGifs';


export const GifCard = ({ category, setCategories }) => {
    
    const { images, isLoading } = useFetchGifs( category ); 
   
    return (
        <>
            <div className="flex justify-between items-center">
                <h3>{category.toUpperCase()}</h3>
                <BtnRemoveGifs 
                    setCategories={setCategories}
                    category={category}
                />
            </div>
            
            
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
