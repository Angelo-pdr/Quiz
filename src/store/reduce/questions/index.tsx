import { createSlice,   } from '@reduxjs/toolkit'
import questions from "../../../data/questions"

type QuestionState = {
  questions: CardapioProps[]
}

const initialState: QuestionState = {
  questions
}
const QuestionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {

  }
})

export default QuestionSlice.reducer
