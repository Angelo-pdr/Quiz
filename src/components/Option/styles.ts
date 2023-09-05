import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  margin: 10px 0;
  color: ${colors.primary};
`
export const CheckItems = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
  flex: 1;
  border: 2px solid ${colors.primary};
  padding: .2rem .8rem;
  cursor: pointer;
  border-radius: .8rem;
  transform: transtion: 1.3s;

  &.correct {
    border: 2px solid green;
    background-color: ${colors.correct};
    color: ${colors.white};
  }

  &.wrong {
    opacity: 0.5;
  }

  &:hover {
    border: 2px solid ${colors.correct};
    color: ${colors.correct};
  }

  p{
    font-size: 1.5rem;
  }
`
