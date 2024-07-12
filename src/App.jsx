import { useState } from "react"

import Header from './components/header'
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        // el + sirve para convertirlo a valor numerico
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Results inputs={userInput}/>
    </>
  
  )
}

export default App
