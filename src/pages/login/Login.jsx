import "./login.scss"
import React, { useContext, useState } from 'react'
import {signInWithEmailAndPassword  } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from "../../Firebase"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
  const [error , setError] = useState(false)
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e)=>{
    e.preventDefault();

  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setError(false);
    dispatch({type:"LOGIN" , payload:user})
    navigate('/')
  })
  .catch((error) => {
    setError(true);
    console.log(error);
  });
}
  
  
  return <>
  <div className={`row align-items-center justify-content-center vh-100 `}>
    <div className="col-md-6 ">
      <form onSubmit={handleLogin} className="d-flex align-items-center flex-column">
        <input onChange={(e)=> setEmail(e.target.value)} type="email" className='form-control w-50' placeholder='email'/>
        <input onChange={(e)=> setPassword(e.target.value)} type="password" className='form-control w-50 mb-4 mt-4' placeholder='password' />
        <button type='submit' className='btn btn-primary w-50 fw-bold fs-5'>login</button>
        {error && <span className='fs-5 text-danger mt-3'>Wrong email or password !</span>}
      </form>
    </div>
  </div>
  </>
}

export default Login