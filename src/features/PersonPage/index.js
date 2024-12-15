import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPersonCredits, fetchPersonDetails } from "./fetchPersonDetails";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";
import { Container } from "../../common/Container";
import { Details } from "./Details";
import { Cast } from "./Cast";
import { Crew } from "./Crew";

export const PersonPage = () => {
  const { id } = useParams();

  const {
    isLoading: detailsLoading,
    error: detailsError,
    data: personDetails,
  } = useQuery({
    queryKey: ["personDetails", id],
    queryFn: () => fetchPersonDetails(id),
    retry: false,
  });

  const {
    isLoading: creditsLoading,
    error: creditsError,
    data: personCredits,
  } = useQuery({
    queryKey: ["personCredits", id],
    queryFn: () => fetchPersonCredits(id),
    retry: false,
  });

  if (detailsLoading || creditsLoading) {
    return <Loading />;
  }

  if (detailsError || creditsError) {
    return <Error />;
  }

  return (
    <Container>
      <Details person={personDetails} />
      <Cast personCast={personCredits?.cast || []} />
      <Crew personCrew={personCredits?.crew || []} />
    </Container>
  );
};
