import { createSlice,   } from '@reduxjs/toolkit'

type QuestionState = {
  question: string
  options: Array<string>
  answer: string
}


const initialState: QuestionState[] = [
  {
    question : "epi?",
    options: ["oi", "oi1", "oi2", "oi3"],
    answer: "oi"
  },
  {
    question : "epi?",
    options: ["oi", "oi1", "oi2", "oi3"],
    answer: "oi"
  }
]

const QuestionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {

  }
})

export default QuestionSlice.reducer
