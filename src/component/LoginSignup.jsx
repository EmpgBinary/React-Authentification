import React, {useState} from 'react'
import './loginsignup.css'
// import { Password } from 'phosphor-react' 
import { AddressBook} from 'phosphor-react' 
import { Envelope } from 'phosphor-react'
import {Lock} from 'phosphor-react'



const LoginSignup = () => {

    const [action, setAction] = useState('Sign Up');

  return (
      <div className='container'>
          <div className='header'>
              <h1>EMPG Project</h1>
              <div className="text">{ action}</div>
              <div className="underline"></div>
          </div> 
          <div className="inputs">
              {action==="Login"?<div></div>:<div className="input">
                  <AddressBook/>
                  
                  <input type="text"  placeholder='Name' />
              </div>}
              
              <div className="input">
                  <Envelope/>
                  
                  <input type="email" placeholder='Email Id' />
              </div>
              <div className="input">
                  <Lock/>
                  <input type= "password" placeholder='Password' />
              </div>
             
          </div>
          {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click here!</span></div>}
         
          <div className="submit-container">
              <div className={action === 'Login' ? "submit gray" : 'submit'} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
              <div className={action === 'Sign up' ? "submit gray" : 'submit'}onClick={()=>{setAction("Login")}}>Login</div>
          </div>
    </div>
  )
}

export default LoginSignup