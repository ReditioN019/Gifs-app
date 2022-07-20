import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// logica de cargar y manejar las imagenes traidas de la api de giphy

export const useFetch = ( category) => {
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [errorSearch, setErrorSearch] = useState(false);
        
    const getImages = async () => {
        setLoading(true);
        const newImages = await getGifs(category, setLoading);
        
        if(!newImages){
            setErrorSearch(true);
            return
        } 
        
        setErrorSearch(false);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);



    return { images, loading, errorSearch }
}


