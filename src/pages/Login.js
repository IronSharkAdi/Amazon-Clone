import { Link , useHistory} from 'react-router-dom';
import React, { useState } from 'react'
import './login.css'
import { auth } from '../firebase'

function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const history = useHistory()

    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email , password)
            .then((user) =>{
                history.push('/')
            })
                .catch(error => alert(error.message))
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
                    <button type="submit" onClick={signIn}  className="sign-in__btn">Sign in</button>
                </form>
                <p>By signing in you agree to this Amazon clone conditions of use & sell . Actually there is no conditions or something , this is just a non-commercial project</p>
                <Link to="/register"> <button className="login__btn">Create you account</button> </Link>
            </div>                                                   
        </div> 
    )
}

export default Login
