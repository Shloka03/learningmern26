import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
  const{register,handleSubmit,formState:{errors}}=useForm({mode:"all"})
  const submitHandler = (data) =>{
    console.log(data)
  }
  const validationSchema={
    nameValidator:{
      required:{
        value:true,
        message:"Name is required*"
      }
    },
    contactValidator:{
      required:{
        value:true,
        message:"contact is required"
      },
      pattern:{
        value:/[6-9]{1}[0-9]{9}$/,
        message:"invalid contact."
      }
    },
    promoCodeValidator:{
      required:{
        value:true,
        message:"promocode is required*"
      },
      validate:(params)=>{
        return params=="2026" || "invalid promocode*"
      }
    },
    hobbiesValidator:{
      required:{
        value:true,
        message:"hobbies are required*"
      },
      validate:(params)=>{
        return params?.length>=2 || "min 2 hobbies are required*"
      }
    }
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME:</label>
            <input type='text' {...register("name",validationSchema.nameValidator)}></input>
            {errors.name?.message}
          </div>
          <div>
            <label>CONTACT:</label>
            <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
            {errors.contact?.message}
          </div>
          <div>
            <label>PROMO CODE</label>
            <input type='text' {...register("promocode",validationSchema.promoCodeValidator)}></input>
            {errors.promocode?.message}
          </div>
          <div>
            <label>HOBBIES</label> <br></br>
            Cricket:<input type ='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="cricket"></input>
            Travel:<input type ='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="travel"></input>
            Scrolling:<input type ='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="scrolling"></input>
          </div>
          {errors.hobbies?.message}
          <div>
            <input type ='submit'></input>
          </div>
        </form>
    </div>
  )
}
