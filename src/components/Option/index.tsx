import * as C from "./styles"
import { useDispatch } from "react-redux"
import { checkAnswer } from "../../store/reduce/questions"
type Props = {
  children: string
  answer: string
}

const Option = ({children, answer}: Props) => {
  const dispatch = useDispatch()
  let wasSelected = true

  function selected (answer: string, Selecte: string ){
    dispatch(checkAnswer({
      answer,
      question: Selecte
    }))
  }

  return(
    <C.Container onClick={() => selected(answer, children)}>
      <C.CheckItems className={wasSelected ? '' : 'response'}>
        <p>{children}</p>
      </C.CheckItems>
    </C.Container>
  )
}

export default Option
