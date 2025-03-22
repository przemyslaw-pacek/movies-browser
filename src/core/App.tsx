import { Header } from "../common/Header";
import { MovieList } from "../features/MovieList";
import { MoviePage } from "../features/MoviePage";
import { SearchResults } from "../common/SearchResults";
import { PersonPage } from "../features/PersonPage";
import { PersonList } from "../features/PersonList";
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import {
  toMovie,
  toMovies,
  toMoviesSearch,
  toPeople,
  toPeopleSearch,
  toPerson,
} from "./routes";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <Header />
      <ScrollToTop />

      <Switch>
        <Route path={toMoviesSearch()}>
          <SearchResults />
        </Route>
        <Route path={toPeopleSearch()}>
          <SearchResults />
        </Route>
        <Route path={toMovie(":id")}>
          <MoviePage />
        </Route>
        <Route path={toPerson(":id")}>
          <PersonPage />
        </Route>
        <Route path={toMovies()}>
          <MovieList />
        </Route>
        <Route path={toPeople()}>
          <PersonList />
        </Route>
        <Route exact path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
