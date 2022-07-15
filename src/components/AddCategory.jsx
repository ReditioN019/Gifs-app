import { useState } from "react"



export const AddCategory = ({ newCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //valida que tenga al menos 2 caracteres
        if(inputValue.trim().length < 2) return;
        
        //envío la categoria al padre.
        newCategory( inputValue.trim() );
        setInputValue(''); //limpio input
    }

    return (
        <form onSubmit={ handleSubmit } className="">
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ handleChange }
            />
        </form>
    )
}
