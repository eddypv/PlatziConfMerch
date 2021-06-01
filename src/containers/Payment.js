import React,{useContext} from 'react'
import '../styles/components/Payment.css'
import {PayPalButton} from 'react-paypal-button'
import AppContext from '../context/AppContext'
import sumTotalPrice from '../utils/SumTotalPrice'
import Config from '../utils/Config'

const Payment = ({history}) => {
    const {state, addNewOrder} = useContext(AppContext)
    const {cart, buyer} = state
    console.log(Config) 
    const paypalOptions ={
        clientId:Config.paypalClientId,
        intent:"capture",
        currency:"USD"
    }
    const buttonStyles ={
        layout:"vertical",
        shape:"rect"
    } 

    const handlePaymentSuccess = payment =>{
        if(payment.status === "COMPLETED"){
            const newOrder = {
                cart,
                buyer,
                payment
            }
            addNewOrder(newOrder)
            history.push('/checkout/success')
        }
        
    }
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item =>(
                    <div key={item.id}className="Payment-item">
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button" >
                    <PayPalButton 
                    paypalOptions={paypalOptions}
                    buttonStyles={buttonStyles}
                    amount={sumTotalPrice(cart)}
                    onPaymentStart={()=>{ console.log("inicio")}}
                    onPaymentSuccess={data=>{ handlePaymentSuccess(data)}}
                    onPaymentError={error => { console.log(error)}}
                    onPaymentCancel={(data) => { console.log(data)}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Payment