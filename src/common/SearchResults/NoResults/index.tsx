import { Container } from "../../Container";
import { useQueryParameter } from "../../queryParameters";
import { NoResultsText, StyledImages } from "./styled";

export const NoResults = () => {
  const query = useQueryParameter("query");

  return (
    <Container>
      <NoResultsText>Sorry, there are no results for "{query}"</NoResultsText>
      <StyledImages />
    </Container>
  );
};
