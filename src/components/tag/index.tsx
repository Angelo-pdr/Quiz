import * as C from "./styles"
type Props = {
  children: string
}

const Tag = ({children}: Props) => {

  let wasSelected = true

  function selected (response: string){
    console.log(response)
    wasSelected = !wasSelected
    console.log(wasSelected)
    return wasSelected
  }

  return(
    <C.Container onClick={() => selected(children)}>
      <C.CheckItems className={wasSelected ? '' : 'response'}>
        <p>{children}</p>
      </C.CheckItems>
    </C.Container>
  )
}

export default Tag
