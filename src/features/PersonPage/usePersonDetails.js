import axios from "axios";
import { useState, useEffect } from "react";
import { url_back, url_front } from "../../common/API/requests";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const usePersonDetails = () => {
    const person = useParams();

    const url = `${url_front}/person/${person.id}${url_back}`;

    const [loading, setLoading] = useState(true);

    const [personDetails, setPersonDetails] = useState({
        data: [],
        status: "loading",
    });

    useEffect(() => {
        const getPersonDetails = async () => {
            try {
                const response = await axios.get(url);
                setPersonDetails({
                    data: response.data,
                    status: "success",
                });
            } catch (error) {
                setPersonDetails({
                    status: "error",
                });
                console.error(error.message);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500);

            }
        };

        setTimeout(getPersonDetails, 0);
    }, [url]);

    return { loading, personDetails };
};