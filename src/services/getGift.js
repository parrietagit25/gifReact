const apiKey = 'f0gXyNeUt4xNp70KAHtTjppzKCpKH1A7'


export default function getGifs({keyword='silent+hill'}={}){

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        const gifs = data.map(image=>{
            
            const {url} = image.images.downsized_medium
            const {title, id, images} = image
            return {title, id, url}
        })
        return gifs
        })

}