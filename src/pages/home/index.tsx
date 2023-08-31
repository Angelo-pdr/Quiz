import Title from "../../components/title"
import * as C from "./styles"
import category from "../../assets/quiz.svg"
import Button from "../../components/button"

const Home = () => {
  return(
    <C.Container>
      <div>
        <Title>Uso de EPI: por que é importante para a segurança?</Title>
        <C.Paragraph>
          Para que uma empresa possa conhecer todos os equipamentos de proteção individual
          que devem ser fornecidos aos seus funcionários, é necessário elaborar um estudo
          dos riscos ocupacionais. Esse tipo de trabalho facilita a identificação dos perigosos
          dentro de uma planta industrial.
        </C.Paragraph>
        <Button url="quiz">QUIZ</Button>
      </div>
        <C.Imagen src={category} alt="" />
    </C.Container>
  )
}

export default Home
