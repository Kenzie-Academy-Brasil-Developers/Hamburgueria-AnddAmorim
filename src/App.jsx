import { HomePage } from "./pages/HomePage"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
      <HomePage />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
