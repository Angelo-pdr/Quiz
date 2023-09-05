import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store"
import Title from "../../components/title"
import * as C from "./styles"
import Button from "../../components/button"
import category from "../../assets/category.svg"
import Tag from "../../components/Option"
import { useState } from "react"
import { checkAnswerSelectd } from "../../store/reduce/questions"

const Quiz = () => {
  const dispatch = useDispatch()
  let [index, setIndex] = useState<number>(0)
  const { questions, answerSelectd } = useSelector((state: RootState) => state.questions)


  function next() {
    if(answerSelectd){
      if(index == questions.length - 1){
        setIndex(questions.length - 1)
      }else {
        setIndex(++index)
      }
      dispatch(checkAnswerSelectd())
    }
  }

  return(
    <div className="container">
     <C.Container>
     <C.CardTop>
        <Title>{questions[index].question}</Title>
        <C.AreaButton>
          {answerSelectd ? <Button type="button" eFuction={next}>Proximo</Button> : '' }
        </C.AreaButton>
       </C.CardTop>
       <C.CardBody>
          <C.CardBodyLeft>
              {questions[index].options.map((item) => (
                <Tag answer={questions[index].answer} key={item}>{item}</Tag>
              ))}
          </C.CardBodyLeft>
            <img src={category} alt="" />
       </C.CardBody>
     </C.Container>
    </div>
  )
}

export default Quiz
