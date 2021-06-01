import React, {useContext} from 'react'
import '../styles/components/Success.css'
import Map from '../components/Map'
import AppContext from '../context/AppContext'
import usePositionStactAddress from '../hooks/useGoogleAddress'

const Success = () =>{
    const {state} = useContext(AppContext)
    const {buyer} = state
    const map = usePositionStactAddress(buyer[0].address)
    console.log("posision",map)
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Success-map">
                    <Map position={map}/>
                </div>
            </div>
        </div>
    )
} 

export default Success