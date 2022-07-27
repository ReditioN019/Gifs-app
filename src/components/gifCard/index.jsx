import { useEffect } from 'react';
import { useContext } from 'react';
import { GifContext } from '../../context/GifContext';
import { useFetch } from '../../hooks';
import { BtnRemoveGifs } from './BtnRemoveGifs';
import { GifItem } from './GifItem';
import { Loading } from './Loading';

export const GifCard = ({ categoria }) => {

    // const { images, loading, errorSearch } = useContext( GifContext );

    const { images, loading, errorSearch } = useFetch(categoria);

    
    return (
        <>
            {
                loading ?
                    <Loading loading={loading} />
                    :
                    !errorSearch && //despues del loading, si no existe un error en la búsqueda...
                    <>
                        <div className="flex justify-between items-center">
                            <h3>{categoria.toUpperCase()}</h3>
                            <BtnRemoveGifs
                                category={categoria}
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
