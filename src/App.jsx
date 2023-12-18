import { useState } from "react"
import UserInput from "./util/components/UserInput"
import Results from "./util/components/Results"

function App() {

  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
})

function handleChange(inputId, value){
    setInput( prev=>{
        return{
            ...prev,
            [inputId]: +value
        }
    })
}
const inputIsValid = input.duration>0;
  return (
    <>
    <UserInput onChange={handleChange} input={input}/>
    {inputIsValid ? <Results input={input} />: <p className="center">Please Enter Valid Duration</p> }
   
    </>
    
  )
}

export default App
