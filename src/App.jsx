import { useState } from "react"
import UserInput from "./util/components/UserInput"
import { calculateInvestmentResults } from "./util/investment"

function App() {

  const [inputInvestment, setInputInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn  : 0,
    duration       : 0,
  })

  const [result, setResult] = useState([])
  function handleValueChange(name, value){
    setInputInvestment({
      ...inputInvestment,
      [name]: value
    })
    console.log(inputInvestment)
    calculateInvestmentResults(inputInvestment)
    console.log(calculateInvestmentResults(inputInvestment))
   setResult(calculateInvestmentResults(inputInvestment))
  }

  

  return (
    <>
   
    <UserInput inputLabel="Initial Investment" onChange={handleValueChange} inputId="initialInvestment"/>
    <UserInput inputLabel="Annual Investment" onChange={handleValueChange} inputId="annualInvestment"/>
    <UserInput inputLabel="Expected Return" onChange={handleValueChange} inputId="expectedReturn"/>
    <UserInput inputLabel="Duration" onChange={handleValueChange} inputId="duration"/>
    
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item)=>{ 
          return(
          <tr>
            <td>{item.year}</td>
            <td>{item.investmentValue}</td>
            <td>{item.interest}</td>
            <td>{item.totalInterest}</td>
            <td>{item.investedCapital}</td>
          </tr>)
        })}
      </tbody>
    </table>
    

    </>
    
  )
}

export default App
