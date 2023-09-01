import styled from "styled-components";


export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-top: 2rem;
`

export const CardTop = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardBody = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.5rem;

  img{
    width: 40%;
    height: 100%;
  }
`

export const CardBodyLeft = styled.div`
  width: 50%;
  min-height: 100%;

  select{
    width: 100%;
    min-height: 100%;
    background: none;
    border: none;
  }
`

export const AreaButton = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  aling-items: center;
  justify-content: space-between;
`
