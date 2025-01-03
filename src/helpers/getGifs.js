export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=9FzRUY9vwhi2TUPDKU3zllcRO37V5dtB&q=${category}&limit=5`;

    const response = await fetch(URL);
    const { data } = await response.json();

    //console.log(data);

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));

    console.log(gifs);
    return gifs;
};