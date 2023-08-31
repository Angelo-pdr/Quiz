import Botao  from "./styles"

type Props = {
  children: string
  url: string
}

const Button = ({children, url}: Props ) =>  (
    <Botao to={url as string}>{children}</Botao>
  )

export default Button
