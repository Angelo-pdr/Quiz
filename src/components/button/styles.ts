import styled from "styled-components";
import { Link } from "react-router-dom";

export const BotaoLink = styled(Link)`
  display: block;
  max-width: 100px;
  width: 100%;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: .8rem 2rem;
  border-radius: .5rem;
  border: none;
  cursor: pointer;

  background: #4316F3;
  &:hover {
    Transform: scale(1);
  }
`
export const BotaoContainer = styled.button`
  display: block;
  max-width: 100px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: .8rem 2rem;
  background: #4316F3;
  border-radius: .5rem;
  border: none;
  cursor: pointer;
  Transform: scale(0.9);

  &:hover {
    Transform: scale(1);
    opacity: 0.7;
    );
  }
`
