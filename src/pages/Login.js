import { Link } from '@material-ui/core'
import React from 'react'
import './login.css'

function login() {
    return (
        <div className="login">
            <Link>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="amazon logo png"/>
            </Link>
        </div> 
    )
}

export default login
