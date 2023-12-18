import { calculateInvestmentResults, formatter } from "../investment.js"

export default function Results({input}){

    const results = calculateInvestmentResults(input);
    const initialInvestement = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    console.log(results)
    return(
        <>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result)=>{
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year -initialInvestement;
                    const investedCapital = result.valueEndOfYear - totalInterest;
                    return(
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.annualInvestment)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}