
import { useState } from 'react';

//Hook para leer los datos de un formulario
export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    };

    const handleInputChange = ( {target }) => {
        
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };

    return [values, handleInputChange, reset];

}