import { useState } from "react"

export default function UserInput({onChange, input}){

    

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                <label>
                    Initial investment
                </label>
                <input type="number" value={input.initialInvestment} onChange={(event)=>onChange("initialInvestment", event.target.value)}></input>
                </p>
                <p>
                <label>
                    Annual investment
                </label>
                <input type="number" value={input.annualInvestment} onChange={(event)=>onChange("annualInvestment", event.target.value)}></input>

                </p>
            </div>
            <div className="input-group">
                <p>
                <label>
                    Expected Return
                </label>
                <input type="number" value={input.expectedReturn} onChange={(event)=>onChange("expectedReturn", event.target.value)}></input>
                </p>
                <p>
                <label>
                    Duration
                </label>
                <input type="number" value={input.duration} onChange={(event)=>onChange("duration", event.target.value)}></input>
                </p>
            </div>
        </section>
    )
}