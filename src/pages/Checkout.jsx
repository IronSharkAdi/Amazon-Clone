import React from 'react'
import './checkout.css'
import Subtotal from '../components/Subtotal'
import CheckoutProduct from '../components/CheckoutProduct'
import { useStateValue } from '../StateProvider'

//id ,  title , image , price , rating

function Checkout() {
    const [ { basket }] = useStateValue()
    return (
        <div className="checkout" >
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon ad"/>
                <div>
                    <h2 className="checkout__title">Your product basket</h2>
                    {basket.map((item)=>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}


export default Checkout
