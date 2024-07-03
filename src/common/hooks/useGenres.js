import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front } from "../API/requests";
const url = `${url_front}/genre/movie/list${url_back}`;

export const useGenres = () => {
    const [genres, setGenres] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await axios.get(url);
                setGenres({
                    data: response.data.genres,
                    status: "success",
                });
            } catch (error) {
                setGenres({
                    status: "error",
                });
                console.error(error.message);
            }
        };

        setTimeout(getGenres, 0);
    }, []);

    return { genres };
};
