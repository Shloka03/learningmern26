import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [name,setname]=useState("")
    const [gender,setgender]=useState("")
    const [country,setcountry]=useState("")
    const [stateName, setStateName] = useState("")
    const [availableStates, setAvailableStates] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const countryData = [
        {
            name: "india",
            states: ["Gujarat", "Maharashtra", "Rajasthan", "Punjab"]
        },
        {
            name: "usa",
            states: ["California", "Texas", "Florida", "New York"]
        },
        {
            name: "china",
            states: ["Guangdong", "Beijing", "Shanghai", "Shenzhen"]
        }
    ];


    const nameHandler =(event)=>{
        setname(event.target.value)
    }

    const genderHandler =(event)=>{
        setgender(event.target.value)
    }

    const submitHandler = () => {
        setIsSubmitted(true)   
    }

     const countryHandler = (event) => {
        const selectedcountry = event.target.value
        setcountry(selectedcountry)
        setIsSubmitted(false)

        
        const countryObj = countryData.find(
            (c) => c.name === selectedcountry
        )

        
        setAvailableStates(countryObj ? countryObj.states : [])
        setStateName("")
    }

    

  return (
    <div>
        <h1>InputDemo2</h1>
        <div>
            <label>NAME:</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE : <input type='radio' value="male" name="gender" onChange={(event) =>{genderHandler(event)}}></input>
            <br></br>
            FEMALE : <input type='radio' value="female" name="gender" onChange={(event) =>{genderHandler(event)}}></input>

            
        </div>
        <div>
            <label>COUNTRY</label>
            <select onChange={countryHandler}>
                    <option value="">Select Country</option>
                    {countryData.map((c, index) => (
                        <option key={index} value={c.name}>
                            {c.name.toUpperCase()}
                        </option>
                    ))}
            </select>
            
        </div>

        <br />

        <div>
                <label>STATE:</label>
                <select
                    onChange={(e) => {
                        setStateName(e.target.value)
                        setIsSubmitted(false)
                    }}
                    disabled={!country}   
                >
                    <option value="">Select State</option>
                    {availableStates.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
        </div>

        <br />

        <button onClick={submitHandler}>Submit</button>

        <hr />
        {isSubmitted && (
                <div>
                    <h2>Submitted Data:</h2>
                    <p><b>Name:</b> {name}</p>
                    <p><b>Gender:</b> {gender}</p>
                    <p><b>Country:</b> {country}</p>
                    <p><b>State:</b> {stateName}</p>
                </div>
            )}
    </div>
  )
}
