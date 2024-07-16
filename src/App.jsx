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

  const inputIsValid = userInput.duration >= 1

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
      { !inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      { inputIsValid && <Results inputs={userInput}/>}
    </>
  
  )
}

export default App
