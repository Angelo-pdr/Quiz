import { PayloadAction, createSlice,   } from '@reduxjs/toolkit'
import questions from "../../../data/questions"

type GetAnswer = {
  question: string
  answer: string
}

type QuestionState = {
  questions: CardapioProps[]
  TOTAL_QUESTIONS_ANSWERED: number
  answerSelectd: | string
  score: number
}

const initialState: QuestionState = {
  questions,
  TOTAL_QUESTIONS_ANSWERED: 0,
  answerSelectd: '',
  score: 0
}
const QuestionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    checkAnswer: (state, action: PayloadAction<GetAnswer>) => {
      if(state.answerSelectd) return state
        if(action.payload.answer == action.payload.question){
          state.score++
          state.TOTAL_QUESTIONS_ANSWERED++
        }
        state.answerSelectd = action.payload.question
        console.log(state.score)
    },
    checkAnswerSelectd: ( state ) => {
      state.answerSelectd = ''
    }
  }
})

export const { checkAnswer, checkAnswerSelectd } = QuestionSlice.actions
export default QuestionSlice.reducer
