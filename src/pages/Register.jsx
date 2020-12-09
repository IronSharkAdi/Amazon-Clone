import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './register.css'
import { auth ,base } from '../firebase'


function Register() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name , setName] = useState('')
    const history = useHistory()
    
    const register = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((user) =>{
            console.log("registering2")
            base.ref(`users/${user.user.uid}`).set({name : name}); 
            history.push('/')
        }).catch(error => {
            console.log(error)
            alert(error.message)
        })
    }
 

    
    return (
        <div className="register">
            <Link to="/">  
                <img className="register__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="amazon logo png"/>
            </Link>
            <div className="register__container">
            <h1>Create an account</h1>
                <form >
                    <h5>Username</h5>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} />
                    <h5>Email</h5>
                    <input type="text" required value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={register}  className="register_btn">Create an account</button>
                </form>
                <p>By signing in you agree to this Amazon clone conditions of use & sell . Actually there is no conditions or something , this is just a non-commercial project</p>
                <Link to="/register"> <button className="register_btn">Sign-In</button> </Link>
            </div>
        </div>
    )
}

export default Register
