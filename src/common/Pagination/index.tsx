import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useScreenWidth } from "../useScreenWidth";
import {
  Wrapper,
  Left,
  Right,
  ButtonSection,
  ButtonTile,
  ButtonText,
  CounterWrapper,
  CounterText,
  CounterNumber,
} from "./styled";
import { fetchSearchResults } from "../SearchResults/fetchSearchResults";
import { useQueryParameter } from "../queryParameters";
import { useQuery } from "@tanstack/react-query";

export const Pagination = () => {
  const location = useLocation();
  const history = useHistory();
  const query = useQueryParameter("query");

  const isMoviesPage = location.pathname.startsWith("/movies");
  const page = new URLSearchParams(location.search).get("page");
  const currentPage = page ? parseInt(page) : 1;

  const { data: searchResults } = useQuery({
    queryKey: ["results", query, isMoviesPage, currentPage],
    queryFn: () => fetchSearchResults({ query, isMoviesPage, currentPage }),
    retry: false,
  });

  const totalPages = query ? searchResults.total_pages : 500;

  const [previousQuery, setPreviousQuery] = useState(query);

  useEffect(() => {
    if (query !== previousQuery) {
      const newUrl = `${location.pathname}?page=1&query=${query}`;
      history.replace(newUrl);
      setPreviousQuery(query);
    } else if (!location.pathname.includes("search") && currentPage === 1) {
      const newUrl = `${location.pathname}`;
      history.replace(newUrl);
    }
  }, [currentPage, query, previousQuery, history, location.pathname]);

  const changePage = (newPage: number) => {
    if (1 <= newPage && newPage <= totalPages) {
      const newUrl = `${location.pathname}?page=${newPage}${
        query ? `&query=${query}` : ""
      }`;
      history.push(newUrl);
    }
  };

  const isLargeScreen = useScreenWidth();

  return (
    <Wrapper>
      <ButtonSection>
        <ButtonTile disabled={currentPage === 1} onClick={() => changePage(1)}>
          {isLargeScreen ? (
            <Left />
          ) : (
            <>
              <Left />
              <Left />
            </>
          )}
          <ButtonText>First</ButtonText>
        </ButtonTile>

        <ButtonTile
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          <Left />
          <ButtonText>Previous</ButtonText>
        </ButtonTile>
      </ButtonSection>

      <CounterWrapper>
        <CounterText>Page</CounterText>
        <CounterNumber>{currentPage}</CounterNumber>
        <CounterText>of</CounterText>
        <CounterNumber>{totalPages}</CounterNumber>
      </CounterWrapper>

      <ButtonSection>
        <ButtonTile
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
        >
          <ButtonText>Next</ButtonText>
          <Right />
        </ButtonTile>

        <ButtonTile
          disabled={currentPage === totalPages}
          onClick={() => changePage(totalPages)}
        >
          <ButtonText>Last</ButtonText>
          {isLargeScreen ? (
            <Right />
          ) : (
            <>
              <Right />
              <Right />
            </>
          )}
        </ButtonTile>
      </ButtonSection>
    </Wrapper>
  );
};
