import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
      // getGifs(category)
        getImages();

    }, []);

  return {
    // images: images, <<--CUANDO TENEMOS UNA PROPIEDAD QUE APUNTA A UNA VARIABLE CON EL MISMO NOMBRE
    // SE PUEDE PONER SOLO EL OMBRE DE LA PROPIEADAD.
    // ASI COMO ESTA A CONTINUACION:
    images,
    isLoading
  }
}
