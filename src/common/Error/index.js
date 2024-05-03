import { toMovies } from "../config/routes";
import { Button, ErrorMasege, Recomendation, StyledDanger, Warning } from "./styled";

const Error = () => (
    <ErrorMasege>
        <StyledDanger />
        <Warning>Ooops! Something went wrong... </Warning>
        <Recomendation>Please check your network connection <br /> and try again</Recomendation>
        <Button to={toMovies()}>Back to home page</Button>
    </ErrorMasege>
);

export default Error;