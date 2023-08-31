import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Title from "../../components/title"
import { Top, AreaButton } from "./styles"
import Button from "../../components/button"

const Quiz = () => {
  const { items } = useSelector((state: RootState) => state.questions)
  return(
    <div className="container">
       <Top>
        <Title>{items[1].question}</Title>
        <AreaButton>
          <Button type="button">Back</Button>
          <Button type="button">Next</Button>
        </AreaButton>
       </Top>
    </div>
  )
}

export default Quiz
