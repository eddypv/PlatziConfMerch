/* eslint-disable import/imports-first */
import React, {useContext} from 'react'
import '../styles/components/Checkout.css'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext'


const Checkout = () =>{
    const {state, removeFromCart} = useContext(AppContext)
    const {cart} = state

    const handleRemoveCart = product =>{
        removeFromCart(product)
    }
    const sumTotalPrice = ()=>{
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        return cart.reduce(reducer,0)
    }
    return (
        <div className="Checkout">
            <div className="Checkout-content" >
                <h3>{cart.length >0 ? 'Lista de Pedidos:':'No tiene pedidos' }</h3>
                {cart.map(item => (
                    <div key={item.id} className="Checkout-item">
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>{`$ ${item.price}`}</span>
                        </div>
                        <button type="button" onClick={()=>{handleRemoveCart(item)}}>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                ))}
                
            </div>
            {cart.length >0 && (
                <div className="Checkout-sidebar">
                    <h3>{`Precio Total: $ ${sumTotalPrice()}`}</h3>
                    <Link to="/checkout/information">
                        <button type="button"> Continuar pedido</button>
                    </Link>
                </div>
            )}
            
        </div>
    )
}



export default Checkout