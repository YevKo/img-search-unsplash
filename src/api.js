import axios from "axios";

const SearchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID IX0ketCQDU-qZ_OOGYcOgXna95UYk9lz3pLZsZp6igA'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default SearchImages;