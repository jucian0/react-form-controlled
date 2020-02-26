import React,{useState, useEffect} from 'react'
import { ValidationError } from "yup";
   
const useValidation = (values, schema)=>{
   const [errors, setErrors] = useState({})

   const validate =  async ()=>{
      try {
         await schema.validate(values, { abortEarly: false })
         setErrors({})
      } catch (e) {
         if (e instanceof ValidationError) {
            const errors = {}
            e.inner.forEach((key) => {
               errors[key.path] = key.message
            })
            setErrors(errors)
         }
      }
   }

   useEffect(()=>{validate()},[values])

   return {errors}
}

export default useValidation
   
