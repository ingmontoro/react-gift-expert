import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputvalue] = useState('');

    const onInputChange = (event) => {
        setInputvalue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length > 0) {
            onAddCategory(inputValue);
            setInputvalue(''); // clear input
        }
    }
{/* <form onSubmit={ onSubmit }> */}
    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='find Gifs'
                value={inputValue}
                onChange={ onInputChange }
            />
            <br /><br />
            <button type='submit'>Agregar</button>
        </form>
    );
}
