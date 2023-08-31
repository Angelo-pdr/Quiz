import { createSlice,   } from '@reduxjs/toolkit'

type QuestionState = {
  items: CardapioProps[]
}


const initialState: QuestionState = {
  items: [
    {
      question : "epi?",
      options: ["oi", "oi1", "oi2", "oi3"],
      answer: "oi"
    },
    {
      question : "epi1?",
      options: ["oi", "oi1", "oi2", "oi3"],
      answer: "oi"
    }
  ]
}
const QuestionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {

  }
})

export default QuestionSlice.reducer
