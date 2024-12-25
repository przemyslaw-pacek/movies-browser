import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularPeople } from "./fetchPopularPeople";
import { Loading } from "../../common/Loading";
import { Error } from "../../common/Error";
import { Container } from "../../common/Container";
import { Grid, Heading } from "./styled";
import { PersonTile } from "../../common/PersonTile";
import { Pagination } from "../../common/Pagination";

export const PersonList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const {
    isLoading,
    error,
    data: people,
  } = useQuery({
    queryKey: ["people", currentPage],
    queryFn: () => fetchPopularPeople(currentPage),
    retry: false,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Container>
          <Grid>
            <Heading>Popular people</Heading>
            {people.results.map((person) => (
              <PersonTile
                key={person.id}
                id={person.id}
                image={person.profile_path}
                title={person.original_name}
              />
            ))}
          </Grid>
          <Pagination />
        </Container>
      )}
    </>
  );
};
