import React, {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import './Login.css';


function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser =  async (e) => {
        e.preventDefault()
          const {email, password} = data
          try {
            const {data} = await axios.post('http://localhost:8000/auth/login', {
              email,
              password
            });
            if(data.error) {
              toast.error(data.error)
            } else {
              setData({});
              navigate('/') // Redirect to the main page after successful login
            }
          } catch (error) {
            
          }
        }
  return (
    <div id="cont">
        <form id="form" onSubmit={loginUser}>
        <label id="Login">Log In</label>
        <label id="emailtext">Email</label>
        <input id="emailinput" type="email" placeholder='Enter Email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label id="passwordtext" >Password</label>
        <input id="passwordinput" type="password" placeholder='Enter Password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button id="submit" type='submit'>Login</button>

        </form>
    </div>
  )
}

export default Login