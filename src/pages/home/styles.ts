import styled from 'styled-components'

export const Container = styled.div`
  background-color: transparent;
  max-width: 900px;
  width: 100%;
  height: 100vh;
  margin: 1.5rem auto;

  div {
    width: 100%;
    height: 100%;
  }
`
export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  max-width: 650px;
  width: 100%;
  text-align: justify;
`
export const Imagen = styled.img`
  display: block;
  width: 720px;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 20px;
  z-index: -1;
`
