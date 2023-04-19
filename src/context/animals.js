import { createContext, useEffect, useState } from 'react';
import axios from "axios";

const AnimalsContext = createContext();

function Provider({ children }) {
    const [images, setImages] = useState([]);
    const [term, setTerm] = useState('');

    const SearchImages = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID IX0ketCQDU-qZ_OOGYcOgXna95UYk9lz3pLZsZp6igA'
            },
            params: {
                query: term,
                per_page: 24
            }
        });

        setImages(response.data.results);
    }

    useEffect(() => {
        SearchImages(term);
    }, []);

    const valueToShare = {
        images,
        SearchImages,
        term,
        setTerm
    };

    return (
    <AnimalsContext.Provider value={valueToShare}>
        {children}
    </AnimalsContext.Provider>
    );
}

export { Provider };
export default AnimalsContext;