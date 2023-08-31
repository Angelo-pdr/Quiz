import {BotaoContainer, BotaoLink}  from "./styles"

type Props = {
  children: string
  url?: string
  type: "link" | "button"
}

const Button = ({children, url, type}: Props ) => {

  if( type == "link"){
    return (
      <BotaoLink to={url as string}>{children}</BotaoLink>
    )
  }

  if ( type == "button"){
    return (
      <BotaoContainer>{children}</BotaoContainer>
    )
  }
}

export default Button
