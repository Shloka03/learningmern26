import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const{register,handleSubmit,formState:{errors},watch}=useForm({mode:"onChange"});
    const password =watch("password") || "";

    const validationSchema = {
        passwordValidator:{
            required:{
                value:true,
                message:"password is required",
            },
        },
            confirmPasswordValidator:{
               required:{
                value:true,
                message:"confirm password is required",
            },
            validate:(value) =>{
                return value === password
                 ?true
                 : "Passwords do not match"
            }
        }
    

        
    };
     const submitHandler = (data) => {
        console.log(data);

     };
     const hasMinLength = password.length >=8;
     const hasSmallLetter = /[a-z]/.test(password);
     const hasCapitalLetter =/[A-Z]/.test(password);
     const hasNumber =/[0-9]/.test(password);
     const hasSpecialChar =/[!@#$%^&*]/.test(password);

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>PASSWORD</label>
                <input type='password' {...register("password",validationSchema.passwordValidator)}></input>
                <p style={{color:"red"}}>{errors.password?.message}</p>
                <div>
                    <p style={{color:hasMinLength?"green":"red"}}>Minimum 8 characters</p>
                    <p style={{color:hasSmallLetter?"green":"red"}}>Atleast one small letter</p>
                    <p style={{color:hasCapitalLetter?"green":"red"}}>Atleast one capital letter</p>
                    <p style={{color:hasNumber?"green":"red"}}>Atleast one number (0-9)</p>
                    <p style={{color:hasSpecialChar?"green":"red"}}>Atleast one specialcharacter (!@#$%^&*)</p>
                </div>
            </div>
            <div>
                <label>Confirm password</label>
                <input type='password' {...register("confirmpassword",validationSchema.confirmPasswordValidator)}></input>
                <p style={{color:"red"}}>{errors.confirmPassword?.message}</p>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
