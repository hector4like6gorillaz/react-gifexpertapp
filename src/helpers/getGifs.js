

export const obtenergif = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category)}&limit=5&api_key=wdLS1xQOMQv6XViyNNPDGHyBFTNColx6`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //setImages(gifs);
    return gifs;
    
}