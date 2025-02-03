import styled from "styled-components";
import { ReactComponent as Vector } from "./Vector.svg";

export const Wrapper = styled.section`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    gap: 8px;
    margin: 50px auto;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    gap: 8px;
  }
`;

export const ButtonTile = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 5px;
  gap: 8px;
  border: none;
  color: ${({ theme }) => theme.color.scienceBlue};
  background: ${({ theme }) => theme.color.pattensBlue};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    padding: 7.5px 12px;
    gap: 4px;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
    background: ${({ theme }) => theme.color.mystic};
    cursor: default;
  }
`;

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    display: none;
  }
`;

export const Right = styled(Vector)`
  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    width: 5px;
    height: 8px;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.waterloo};
  }
`;

export const Left = styled(Right)`
  transform: rotate(180deg);
`;

export const CounterWrapper = styled.span`
  display: flex;
  gap: 8px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    gap: 2px;
    font-size: 10px;
  }
`;

export const CounterNumber = styled.span`
  font-weight: 600;
`;

export const CounterText = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;
