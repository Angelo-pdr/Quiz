import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  color: ${colors.text};
`
export const CheckItems = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
  flex: 1;
  border: 2px solid ${colors.text};
  padding: .2rem .8rem;
  cursor: pointer;
  border-radius: .3rem;
  transform: transtion: 1.3s;

  &.response {
    border: 2px solid ${colors.button};
    color: ${colors.button};
  }

  &:hover {
    border: 2px solid ${colors.button};
    color: ${colors.button};
  }

  p{
    font-size: 1.5rem;
  }
`
