import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Danger } from "./Danger.svg";

export const StyledDanger = styled(Danger)`
  width: 120px;
  height: 120px;
  margin-top: 124px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 80px;
    height: 80px;
  }
`;

export const ErrorMasege = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Warning = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 26px;
  }
`;

export const Recomendation = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 15px;
  }
`;

export const Button = styled(NavLink)`
  padding: 16px 24px 16px 24px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  border: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;

  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 10px;
  }
`;
