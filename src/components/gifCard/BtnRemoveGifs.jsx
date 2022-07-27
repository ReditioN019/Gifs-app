import { useContext } from 'react';
import { MdCleaningServices } from 'react-icons/md';
import { GifContext } from '../../context/GifContext';

export const BtnRemoveGifs = ({ category}) => {

    const { handldeRemoveCategory } = useContext( GifContext );

    return (
        <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
            onClick={ () => handldeRemoveCategory( category ) }
        >
            <MdCleaningServices color='white' size='1.1rem' />
            <span className="ml-3">Quitar</span>
        </button>
    )
}
