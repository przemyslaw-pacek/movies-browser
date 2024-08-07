import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front } from "../../common/API/requests";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const useMovieCredits = () => {
    const movie = useParams();

    const url = `${url_front}/movie/${movie.id}/credits${url_back}`;

    const [movieCredits, setMovieCredits] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getMovieCredits = async () => {
            try {
                const response = await axios.get(url);
                setMovieCredits({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setMovieCredits({
                    status: "error",
                });
                console.error(error.message);
            }
        };

        setTimeout(getMovieCredits, 0);
    }, [url]);

    return { movieCredits };
};