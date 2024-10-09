import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');
  const onImputChange = ({target}) => {    
    setInputValue(target.value);
  }
  const onSubmit = (evento) => {
    evento.preventDefault();
    if (inputValue.trim().length <= 1) return;
    
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }


  return (
    // ESTA ES LA FORMA PONIENDO EL "EVENTO"
    // <form onSubmit={(evento) => onSubmit(evento)}> 

    // ESTA ES LA MISMA PERO MAS LIMPIA, SIN PONER "evento" 
    <form onSubmit={ onSubmit }>
        <input    
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            // onChange={ (event) => onImputChange(event) }  <<== ESTA ES UNA FORMA Y LA DE ABAJO ES OTRA QUE HACE LO MISMO.
            onChange={ onImputChange }
        /> 
    </form>
  )
}
