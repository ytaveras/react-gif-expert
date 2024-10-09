// import React from 'react'  <--IMPORTAR REACT YA NO ES NECESARIO DESPUES DE LA VERSION .17
// ESTE ES LA CLAVE DEL GIPHY:

import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

// Xz4zXUxj3sGLhhhuTN9Mxv36RPwWbbwh
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])
    const onAddCategory = (newCategory) =>{
      
      if (categories.includes(newCategory)) {
        console.log("=> " +newCategory+ " <= "+ 'Ya existe en este listado');
        return;
      }

      // setCategories([...categories, newCategory]);
      setCategories([ newCategory, ...categories]);
      // setCategories([ 'valorants', ...categories]); <--OTRA FORMA
      // setCategories(cat =>[...cat, 'Valorant' ]);   <--OTRA FORMA
      // console.log('Valorant');
    }
    // console.log(categories); 

  return (
    <>
        
        <h1>GifExpertApp</h1>

       
        <AddCategory 
        // setCategories = {setCategories}
          onNewCategory = {(evento) => onAddCategory(evento)}
        />      
        
        
        {
          categories.map((category) => (
              <GifGrid 
                key={category} 
                category={category}
              />
          ))            
        }
            
      

        

    </>
  )
}


