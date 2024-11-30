import axios from "axios";
import { useState, useEffect } from "react";
import { url_base, url_key } from "../../common/API/requests";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const usePersonCredits = () => {
  const person = useParams();

  const url = `${url_base}/person/${person.id}/movie_credits${url_key}`;

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
