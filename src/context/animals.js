import { createContext, useEffect, useState } from 'react';
import axios from "axios";

const AnimalsContext = createContext();

function Provider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [term, setTerm] = useState('');
    const [page, setPage] = useState(1);

    const perPage = 24;

    const SearchImages = async (term, page) => {
        setIsLoading(true);
        const response = await axios.get(`https://api.unsplash.com/search/photos/?&page=${page}`, {
            headers: {
                Authorization: 'Client-ID IX0ketCQDU-qZ_OOGYcOgXna95UYk9lz3pLZsZp6igA'
            },
            params: {
                query: term,
                per_page: perPage,
            }
        });
        setIsLoading(false);

        setImages(response.data.results);
        setPage(page);
    }

    useEffect(() => {
        SearchImages(term, 1);
    }, []);

    const valueToShare = {
        images,
        SearchImages,
        term,
        setTerm,
        perPage,
        page,
        setPage,
        isLoading,
    };

    return (
    <AnimalsContext.Provider value={valueToShare}>
        {children}
    </AnimalsContext.Provider>
    );
}

export { Provider };
export default AnimalsContext;