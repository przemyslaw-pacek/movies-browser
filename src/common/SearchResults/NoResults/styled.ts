import styled from "styled-components";
import { ReactComponent as Picture } from "./Picture.svg";

export const StyledImages = styled(Picture)`
  display: flex;
  width: 668px;
  height: auto;
  justify-content: center;
  position: relative;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    max-width: 100%;
  }
`;

export const NoResultsText = styled.p`
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    font-size: 27px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;
