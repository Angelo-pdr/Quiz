import {BotaoContainer, BotaoLink}  from "./styles"

type Props = {
  children: string
  url?: string
  type: "link" | "button",
  eFuction?: () => void
}

const Button = ({children, url, type, eFuction}: Props ) => {

  if( type == "link"){
    return (
      <BotaoLink to={url as string}>{children}</BotaoLink>
    )
  }

  if ( type == "button"){
    return (
      <BotaoContainer onClick={eFuction}>{children}</BotaoContainer>
    )
  }
}

export default Button
