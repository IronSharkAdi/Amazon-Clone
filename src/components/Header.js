import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


function Header() {
    const [ { basket , user , name } , dispatch] = useStateValue()
    


    const signOut = () => {
        auth.signOut();
    }
    console.log(name)

    return (
        <div className="header">
            <Link to="/">
                <img  className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo"/>
            </Link>

            <div className="header__search"><input type="text" className="header__searchInput" /> <SearchIcon className="header__searchIcon" /> </div> {/*  The Search bar */}
            <div className="header__nav">


            <Link to={!user && "/login"}>
                <div onClick={signOut} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? name : "Guest"}</span>
                        <span className="header__optionLineTwo">{ user ? "Sign-Out" : 'Sign-In'}</span>
                </div>
            </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>



                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    <span className="header__optionLineTwo">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
