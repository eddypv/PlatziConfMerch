/* eslint-disable import/imports-first */
import React, {useContext, useRef} from 'react'
import '../styles/components/Information.css'
import AppContext from '../context/AppContext'


const Information = ({history}) => {
    const {state, addToBuyer} = useContext(AppContext)
    const {cart} = state
    const form = useRef(null)

    const handleSubmit = () =>{
        const formData = new FormData(form.current)
        const buyer ={
            "name":formData.get("name"),
            "email":formData.get("email"),
            "address":formData.get("address"),
            "apto":formData.get("apto"),
            "city":formData.get("city"),
            "country":formData.get("country"),
            "state":formData.get("state"),
            "cp":formData.get("cp"),
            "phone":formData.get("phone"),
        } 
        addToBuyer(buyer)
        history.push("/checkout/payment")
    }
    return (
        <div className="Information">
            <div className="Informacion-content">
                <div className="Informacion-head">
                    <h2>Informacion de Contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre Completo" name="name" />
                        <input type="text" placeholder="Correo Electronico" name="email" />
                        <input type="text" placeholder="Direccion" name="address" />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Codigo Postal" name="cp" />
                        <input type="text" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        Regresar
                    </div>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map(item =>(
                    <div key={item.id} className="Information-item">
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    ) 
}

export default Information