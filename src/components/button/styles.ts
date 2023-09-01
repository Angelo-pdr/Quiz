import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const BotaoLink = styled(Link)`
  display: block;
  max-width: 110px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: .8rem 2rem;
  border-radius: .5rem;
  border: none;
  cursor: pointer;
  background: ${colors.button};
  Transform: scale(0.9);
  &:hover {
    Transform: scale(1);
    background: ${colors.hover};
  }
`
export const BotaoContainer = styled.button`
  display: block;

  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: .8rem 2rem;
  background: ${colors.button};
  border-radius: .5rem;
  border: none;
  cursor: pointer;
  Transform: scale(0.9);

  &:hover {
    Transform: scale(1);
    background: ${colors.hover};
    );
  }
`
