import { GifItem } from './GifItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { BtnRemoveGifs } from './BtnRemoveGifs';
import { Loading } from './Loading';


export const GifCard = ({ category, setCategories }) => {
    
    const { images, loading } = useFetchGifs( category ); 
   
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
                loading && <Loading loading={loading}/>
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
