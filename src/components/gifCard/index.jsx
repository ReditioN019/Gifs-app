import { useEffect } from 'react';
import { useFetch } from '../../hooks';
import { BtnRemoveGifs } from './BtnRemoveGifs';
import { GifItem } from './GifItem';
import { Loading } from './Loading';

export const GifCard = ({ category, setCategories, categories }) => {

    const { images, loading, errorSearch } = useFetch(category);

    useEffect(() => {
        if(errorSearch){
            const categoriasCorrectas = categories.filter( item => (
                item !== category
            ))
            console.log("categorias editadas: ", categoriasCorrectas)
            setCategories(categoriasCorrectas)
        }
    }, [category]);
    

    return (
        <>    
            {
                loading ?
                    <Loading loading={loading} />
                    :
                    !errorSearch && //despues del loading, si no existe un error en la búsqueda...
                    <>
                        <div className="flex justify-between items-center">
                            <h3>{category.toUpperCase()}</h3>
                            <BtnRemoveGifs
                                setCategories={setCategories}
                                category={category}
                            />
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                            {
                                images.map(img => (
                                    <GifItem 
                                        key={img.id}
                                        {...img} //le envío todos los elementos que tiene img
                                    />
                                ))
                            }
                        </div>

                    </>
            }
        </>
    )
}
