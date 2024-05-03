import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { url_back, url_front_person } from "../../common/API/requests";

export const usePopularPeople = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [totalPagesPeople, setTotalPagesPeople] = useState(1);

    const url = `${url_front_person}popular${url_back}`;

    const [popularPeople, setPopularPeople] = useState({
        status: "",
        data: [],
    });

    useEffect(() => {
        const getTotalPagesPeople = async () => {
            setPopularPeople({
                status: "loading",
                data: [],
            });
            try {
                for (let i = 500; i <= 1000000; i++) {
                    const response = await axios.get(`${url}&page=${i}`);

                    if (response.data) {
                        setTotalPagesPeople(i);
                        break;
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        getTotalPagesPeople();

        const getPopularPeople = async () => {
            try {
                const response = await axios.get(`${url}&page=${currentPage}`);

                setPopularPeople({
                    status: "success",
                    data: response.data.results,
                });
            } catch (error) {
                setPopularPeople({
                    status: "error",
                });
                console.error(error.message);
            }
        };

        setTimeout(getPopularPeople, 500);
    }, [url, currentPage]);

    return { popularPeople, totalPagesPeople };
};