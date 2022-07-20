import Swal from 'sweetalert2';

//! Para algo más complejo, axios es mejor

export const getGifs = async (category, setLoading) => {

    try {
        const numRandom = Math.floor((Math.random() * (50-0)) +0)
        const url = `
            https://api.giphy.com/v1/gifs/search?api_key=mepMPXpp1J5vvA6ijPABvglOJUX51p4v&q=${category}&limit=15&rating=r&offset=${numRandom}
        `;
        const resp = await fetch(url);
        const { data } = await resp.json();

        //si no encuentra resultados, devuelve un mensaje de error
        if (data.length === 0) {
            Swal.fire({
                title: 'Error!',
                text: `No se encontraron resultados con: ${category.toUpperCase()}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }

        const gifs = data.map(item => ({
            id: item.id,
            title: item.title,
            url: item.images.downsized_medium.url
        }));

        return gifs

    } catch (error) {
        console.log(error);
        return Swal.fire({
            title: "Error!",
            text: `Error de servidor`,
            icon: "error",
        });
    }
    finally{
        setLoading(false)
    }
}  