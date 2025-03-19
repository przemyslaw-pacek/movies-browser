import styled from "styled-components";
import { ReactComponent as Search } from "./Search.svg";

export const Wrapper = styled.div`
  width: 432px;
  height: 48px;
  display: flex;
  gap: 16px;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 50px;
  padding: 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    margin-left: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 100%;
    height: 44px;
    margin: 16px 0 0;
    padding: 0 16px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 16px;
    height: 16px;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  font-weight: 400;
  line-height: 1.3;
  border: none;
  outline: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 13px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.waterloo};
  }
`;
