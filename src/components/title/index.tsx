import Titulo  from "./styles"

type Props = {
  children: string
}

const Title = ({children}: Props ) =>  (
    <Titulo>{children}</Titulo>
  )

export default Title
