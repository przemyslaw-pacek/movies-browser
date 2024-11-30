import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { url_base, url_key } from "../../common/API/requests";

export const usePopularMovies = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const [totalPagesMovies, setTotalPagesMovies] = useState(1);

  const url = `${url_base}/movie/popular${url_key}`;

  const [popularMovies, setPopularMovies] = useState({
    status: "",
    data: [],
  });

  useEffect(() => {
    const getTotalPagesMovies = async () => {
      setPopularMovies({
        status: "loading",
        data: [],
      });
      try {
        for (let i = 500; i <= 1000000; i++) {
          const response = await axios.get(`${url}&page=${i}`);

          if (response.data) {
            setTotalPagesMovies(i);
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getTotalPagesMovies();

    const getPopularMovies = async () => {
      try {
        const response = await axios.get(`${url}&page=${currentPage}`);

        setPopularMovies({
          status: "success",
          data: response.data.results,
        });
      } catch (error) {
        setPopularMovies({
          status: "error",
        });
        console.error(error.message);
      }
    };

    setTimeout(getPopularMovies, 500);
  }, [url, currentPage]);

  return { popularMovies, totalPagesMovies };
};
