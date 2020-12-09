import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import CheckoutProduct from '../components/CheckoutProduct'
import { useStateValue } from '../StateProvider'
import './payment.css'
import { CardElement , useElements , useStripe } from '@stripe/react-stripe-js'
import { getBasketTotal } from '../reducer'
import CurrencyFormat from 'react-currency-format'
import Axios from '../axios'



// id ,  title , image , price , rating 


function Payment() {
    const elements = useElements()
    const history = useHistory()
    const [ {basket, user , name} ] = useStateValue()
    const [ error , setError ] = useState(null)
    const [ disabled , setDisabled ] = useState(true)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)
    const stripe = useStripe()

    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await Axios({
                method : 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    }, [basket]);

    console.log("the secret key is >>>>>>>>>> " + clientSecret )

    const handleSubmit =  async (e) =>{
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method :{
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/order')
        })
    }
    const handleChange = (e) =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "" )
    }

    return (
        <div className="payment">
                {/* Adress */}
                <div className="payment__container">

                    <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>

                    <div className="payment__section">
                        <div className="title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p> {user ? name : '' } </p>
                            <p>Bangladesh</p>
                            <p>Dhaka</p>
                        </div>
                    </div>
                </div>
                {/* review */}
                <div className="payment__section">
                    <div className="title">
                        Review Items and Delivery
                    </div>
                    <div className="items">
                        {basket.map(item =>(
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

                {/* payment method */}
                        <div className="payment_section">
                            <div className="title">
                                <h3>Payment Method</h3>
                            </div>
                            <div className="description">
                                <form onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange} />
                                    <div className="payment_price">
                                    <CurrencyFormat
                                        renderText={(value) =>(
                                            <h3>Order total : {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button className="buy" disabled={processing || disabled || succeeded}>
                                        <span> {processing ? <p>Processing</p> : "Buy Now" } </span>
                                    </button>
                                    </div>
                                    {error && <div>{error}</div> }
                                </form>
                            </div>                         
                            
                        </div>

        </div>
    )
}

export default Payment
