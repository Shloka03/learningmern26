import React,{useState} from 'react'

export const InputDemo1 = () => {
    const [name, setName] = useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [phoneno, setphoneno] = useState("")
    const [branch, setbranch] = useState("")
    const [college, setcollege] = useState("")
    const [fathername, setfathername] = useState("")
    const [mothername, setmothername] = useState("")
    const [rollno, setrollno] = useState("")

    const nameHandler = (event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const ageHandler = (event) =>{
        setage(event.target.value)
    }
    const emailHandler = (event) =>{
        setemail(event.target.value)
    }
    const passwordHandler = (event) =>{
        setpassword(event.target.value)
    }
    const phonenoHandler = (event) =>{
        setphoneno(event.target.value)
    }
    const branchHandler = (event) =>{
        setbranch(event.target.value)
    }
    const collegeHandler = (event) =>{
        setcollege(event.target.value)
    }
    const fathernameHandler = (event) =>{
        setfathername(event.target.value)
    }
    const mothernameHandler = (event) =>{
        setmothername(event.target.value)
    }
    const rollnoHandler = (event) =>{
        setrollno(event.target.value)
    }

  return (
    <div>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event) =>{nameHandler(event)}}></input>
            {name}
        </div>

        <div>
            <label>AGE</label>
            <input type='number' onChange={(event) =>{ageHandler(event)}}></input>
            {age}
        </div>

        <div>
            <label>EMAIL</label>
            <input type='text' onChange={(event) =>{emailHandler(event)}}></input>
            {email}
        </div>

        <div>
            <label>PASSWORD</label>
            <input type='text' onChange={(event) =>{passwordHandler(event)}}></input>
            {password}
        </div>

        <div>
            <label>PHONENO</label>
            <input type='number' onChange={(event) =>{phonenoHandler(event)}}></input>
            {phoneno}
        </div>

        <div>
            <label>BRANCH</label>
            <input type='text' onChange={(event) =>{branchHandler(event)}}></input>
            {branch}
        </div>

        <div>
            <label>COLLEGE</label>
            <input type='text' onChange={(event) =>{collegeHandler(event)}}></input>
            {college}
        </div>

        <div>
            <label>FATHERNAME</label>
            <input type='text' onChange={(event) =>{fathernameHandler(event)}}></input>
            {fathername}
        </div>

        <div>
            <label>MOTHERNAME</label>
            <input type='text' onChange={(event) =>{mothernameHandler(event)}}></input>
            {mothername}
        </div>

        <div>
            <label>ROLLNO</label>
            <input type='rollno' onChange={(event) =>{rollnoHandler(event)}}></input>
            {rollno}
        </div>
    </div>
  )
}
