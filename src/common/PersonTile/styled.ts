import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import no_profile from "./no_profile.svg";

export const PersonNavLink = styled(NavLink)`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  transition: transform ease 300ms;
  text-decoration: none;
  position: relative;
  width: 100%;
  box-shadow: 0 4px 12px 0 ${({ theme }) => theme.color.heater};

  &:hover {
    transform: translate(0, -10px);
  }

  &:hover {
    transform: translate(0, -10px);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 12px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    grid-gap: 8px;
    padding: 8px;
  }
`;

export const StyledImage = styled.img<{
  $noImage?: boolean;
}>`
  width: 100%;
  border-radius: 5px;

  ${({ $noImage }) =>
    $noImage &&
    css`
      padding-top: calc(100% * 264 / 177);
      background-image: url("${no_profile}");
      background-color: ${({ theme }) => theme.color.silver};
      background-size: 32%;
      background-position: center;
      background-repeat: no-repeat;
    `}
`;

export const Description = styled.section`
  text-align: center;
  word-break: break-word;
`;

export const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 14px;
  }
`;

export const StyledSubtitle = styled.div`
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 18px;
  line-height: 1.5;
  margin-top: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 13px;
    margin-top: 3px;
  }
`;
