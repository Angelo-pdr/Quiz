import { configureStore } from '@reduxjs/toolkit'
import QuestionReducer from './reduce/questions'

export const store = configureStore({
  reducer: {
    questions: QuestionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
