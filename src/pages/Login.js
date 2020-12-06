import { Link } from '@material-ui/core'
import React, { useState } from 'react'
import './login.css'

function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const signIn = (e) =>{
        e.preventDefault()
    }
    const register = (e) =>{
        e.preventDefault()
    }

    return (
        <div className="login">
            <Link>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="amazon logo png"/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form >
                    <h5>Email</h5>
                    <input type="text" required value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onSubmit={signIn}  className="sign-in__btn">Sign in</button>
                </form>
                <p>By signing in you agree to this Amazon clone conditions of use & sell . Actually there is no conditions or something , this is just a non-commercial project</p>
                <button onClick={register} className="login__btn">Create you account</button>
            </div>                                                   
        </div> 
    )
}

export default Login
