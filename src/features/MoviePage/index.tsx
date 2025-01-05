import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieCredits, fetchMovieDetails } from "./fetchMovieDetails";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";
import { Top } from "./Top";
import { Container } from "../../common/Container";
import { Details } from "./Details";
import { Cast } from "./Cast";
import { Crew } from "./Crew";

export const MoviePage = () => {
  const { id } = useParams();

  const {
    isLoading: detailsLoading,
    error: detailsError,
    data: movieDetails,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
    retry: false,
  });

  const {
    isLoading: creditsLoading,
    error: creditsError,
    data: movieCredits,
  } = useQuery({
    queryKey: ["movieCredits", id],
    queryFn: () => fetchMovieCredits(id),
    retry: false,
  });

  if (detailsLoading || creditsLoading) {
    return <Loading />;
  }

  if (detailsError || creditsError) {
    return <Error />;
  }

  return (
    <>
      <Top movie={movieDetails} />
      <Container>
        <Details movie={movieDetails} />
        <Cast movieCast={movieCredits.cast} />
        <Crew movieCrew={movieCredits.crew} />
      </Container>
    </>
  );
};
