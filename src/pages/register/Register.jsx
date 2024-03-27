import React, { useState } from 'react'
import {auth , googleProvider } from "../../Firebase" 
import {createUserWithEmailAndPassword , signInWithPopup } from "firebase/auth" 
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()
  const signUp= async(e)=>{
    e.preventDefault();
    try{
      const cuwe =async()=>{
        await createUserWithEmailAndPassword(auth , email,pass)
        navigate("/")
        console.log('succc');
      }
      cuwe()
  }catch(err){ // tru & catch >> if there an err 
      console.log(err);
  }
}

const signInWithGoogle= async()=>{
  try{
      const wg =async()=>{
        await signInWithPopup(auth , googleProvider) // auth to concat with app 
        navigate("/")
        console.log('succc');
      } 
      wg()
  }catch(err){ // tru & catch >> if there an err 
      console.log(err);
  }
}

  return <>
  <div className={`row align-items-center justify-content-center vh-100 `}>
    <div className="col-md-6 ">
      <form onSubmit={signUp} className="d-flex align-items-center flex-column">
        <input type="text" className='form-control w-50' placeholder='name'/>
        <input onChange={(e)=> setEmail(e.target.value)} type="email" className='form-control w-50 mt-4' placeholder='email'/>
        <input onChange={(e)=> setPass(e.target.value)} type="password" className='form-control w-50 mb-4 mt-4' placeholder='password' />
        <button type='submit' className='btn btn-primary w-50 fw-bold fs-5'>SignUp</button>
        <button onClick={signInWithGoogle} className='btn btn-primary w-50 fw-bold mt-3 fs-5'>Login with google</button>
      </form>
    </div>
  </div>
  </>
}

export default Register
