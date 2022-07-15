
export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=mepMPXpp1J5vvA6ijPABvglOJUX51p4v&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( item => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url
    }));

    return gifs
}  