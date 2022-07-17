import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// logica de cargar y manejar las imagenes traidas de la api de giphy

export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true); 
        
    const getImages = async() => {
        const newImages = await getGifs(category);
        setTimeout(() => {
            setImages(newImages);
            setLoading(false); //aqui ya cargaron las imagenes  
        }, 1000);
    }

    useEffect(() => {
        getImages();
    }, []);


    return {
        images, //envío el array de imagenes
        loading,
    }
}


