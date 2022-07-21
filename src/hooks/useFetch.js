import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetch = ( category) => {

    const [state, setState] = useState({
        images: null,
        isLoading: true,
        error: null,
    })

    const getImages = async () => {     
        
        setState({ ...state, isLoading: true });

        const newImages = await getGifs( category );
      
        if(!newImages){
            return setState({
                ...state,
                isLoading: false, 
                error: true
            })      
        } 

        setState({
            images: newImages,
            isLoading: false,
            error: null,
        });

    }

    useEffect(() => {
        getImages();
    }, [category]);

    return { 
        images: state.images, 
        loading: state.isLoading, 
        errorSearch: state.error 
    }
}


