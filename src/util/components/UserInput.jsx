import { useState } from "react"

export default function UserInput({inputLabel, onChange, inputId}){

    const [value, setValue] = useState(0)

    function handleValueChange(event){
        setValue(event.target.value)
        console.log(event.target.value)
        onChange(inputId, event.target.value)
    }

    return(
        <div id="user-input">
            <label id={inputId}>
                {inputLabel}
            </label>
            <input value={value} onChange={handleValueChange}></input>
        </div>
    )
}