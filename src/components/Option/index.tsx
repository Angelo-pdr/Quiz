import * as C from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { checkAnswer } from "../../store/reduce/questions"
import { RootState } from "../../store"
type Props = {
  option: string
  answer: string
}

const Option = ({option, answer}: Props) => {
  const dispatch = useDispatch()
  const { answerSelectd } = useSelector((state: RootState) => state.questions)
  function selected (answer: string, Selecte: string ){
    dispatch(checkAnswer({
      answer,
      question: Selecte
    }))
  }

  return(
    <>
    {!answerSelectd ? <C.Container onClick={() => selected(answer, option)}>
        <C.CheckItems>
          <p>{option}</p>
        </C.CheckItems>
      </C.Container>
      : (
        <C.Container onClick={() => selected(answer, option)}>
          <C.CheckItems className={option === answer ? 'correct' : 'wrong' }>
            <p>{option}</p>
          </C.CheckItems>
        </C.Container>
      )}


    </>
  )
}

export default Option
