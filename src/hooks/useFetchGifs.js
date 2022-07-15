import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// logica de cargar y manejar las imagenes traidas de la api de giphy

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
        
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); //aqui ya cargaron las imagenes
    }

    useEffect(() => {
        getImages();
    }, []);


    return {
        images, //envío el array de imagenes
        isLoading
    }
}


