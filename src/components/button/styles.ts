import styled from "styled-components";
import { Link } from "react-router-dom";

const Botao = styled(Link)`
  display: block;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(
    90deg,
    rgba(132, 53, 222, 1) 0%,
    rgba(184, 84, 232, 1) 100%
  );
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  Transform: scale(0.9);

  &:hover {
    Transform: scale(1);
    background: linear-gradient(
      90deg,
      rgba(132, 53, 222, 1) 100%,
      rgba(184, 84, 232, 1) 0%
    );
  }
`
export default Botao
