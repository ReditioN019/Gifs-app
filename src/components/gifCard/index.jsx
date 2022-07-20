import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { BtnRemoveGifs } from './BtnRemoveGifs';
import { Loading } from './Loading';

export const GifCard = ({ category, setCategories, categories }) => {

    const { images, loading, errorSearch } = useFetch(category);

    useEffect(() => {
        if(errorSearch){
            console.log('Categoria nueva: ', category);
            const categoriasCorrectas = categories.filter( item => (
                item !== category
            ))
            setCategories(categoriasCorrectas)
        }
    }, [errorSearch])
    

    return (
        <>    
            {
                loading ?
                    <Loading loading={loading} />
                    :
                    !errorSearch &&
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
                                    <div className="mx-auto overflow-hidden rounded-lg bg-slate-600 shadow-lg shadow-[#070f11]"
                                        key={img.id}
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.title}
                                        />
                                        <p>{img.title}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </>
            }
        </>
    )
}
