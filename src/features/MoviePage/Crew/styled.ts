import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  width: 100%;
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    grid-gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletPortrait}) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    padding-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    padding-top: 12px;
  }
`;

export const Title = styled.header`
  font-size: 36px;
  font-weight: 600;
  grid-column: 1 / -1;
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    font-size: 28px;
    margin-top: 21px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 20px;
  }
`;
