export const getGifs = async ( category ) => {
    const limite = 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Xz4zXUxj3sGLhhhuTN9Mxv36RPwWbbwh&q=${ category }&limit=${ limite }`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
      
    }));
    console.log(gifs);
    return gifs;
  }