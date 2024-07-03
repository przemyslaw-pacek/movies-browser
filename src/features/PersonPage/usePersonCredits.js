import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front } from "../../common/API/requests";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const usePersonCredits = () => {
    const person = useParams();

    const url = `${url_front}/person/${person.id}/movie_credits${url_back}`;

    const [personCredits, setPersonCredits] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getPersonCredits = async () => {
            try {
                const response = await axios.get(url);
                setPersonCredits({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setPersonCredits({
                    status: "error",
                });
                console.error(error.message);
            }
        };

        setTimeout(getPersonCredits, 0);
    }, [url]);

    return { personCredits };
};