import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Title from "../../components/title"
import * as C from "./styles"
import Button from "../../components/button"
import category from "../../assets/category.svg"
import Tag from "../../components/tag"
import { useState } from "react"

const Quiz = () => {

  let [index, setIndex] = useState<number>(0)

  const { questions } = useSelector((state: RootState) => state.questions)

  function next() {

    if(index == questions.length - 1){
      setIndex(questions.length - 1)
    }else {
      setIndex(++index)
    }
  }

  function back() {
    setIndex(--index)
  }

  return(
    <div className="container">
     <C.Container>
     <C.CardTop>
        <Title>{questions[index].question}</Title>
        <C.AreaButton>
          {index == 0 ?  '' : <Button eFuction={back} type="button">Volta</Button>}
          <Button type="button" eFuction={next}>Proximo</Button>
        </C.AreaButton>
       </C.CardTop>
       <C.CardBody>
          <C.CardBodyLeft>
              {questions[index].options.map((item, key) => (
                <Tag key={key}>{item}</Tag>
              ))}
          </C.CardBodyLeft>
            <img src={category} alt="" />
       </C.CardBody>
     </C.Container>
    </div>
  )
}

export default Quiz
