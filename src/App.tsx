import RouteQuiz from "./Routes"
import GlobalCss from "./styles"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RouteQuiz />
    </BrowserRouter>
  )
}

export default App
