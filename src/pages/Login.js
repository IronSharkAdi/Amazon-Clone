import { Link } from '@material-ui/core'
import React from 'react'
import './login.css'

function login() {
    return (
        <div className="login">
            <Link>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="amazon logo png"/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button className="sign-in__btn">Sign in</button>
                </form>
                <p>By signing in you agree to this Amazon clone conditions of use & sell . Actually there is no conditions or something , this is just a non-commercial project</p>
                <button className="login__btn">Create you account</button>
            </div>
        </div> 
    )
}

export default login
