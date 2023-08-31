import { configureStore } from '@reduxjs/toolkit'
import QuestionReducer from './reducer/questions'

export const store = () => configureStore({
  reducer: {
    question: QuestionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
