import React from 'react'
import {LoadScript, GoogleMap, Marker} from '@react-google-maps/api'

import Config from '../utils/Config'

const Map = ({position})=>{
    const mapStyle ={
        height:"50vh",
        width:"100%"
    }
    const defaultPosition = {
        lat:-19.036639, 
        lng:-65.2592666
    }
    return (
        <>
        { Object.keys(position).length >0 && (
            <LoadScript googleMapsApiKey={Config.googleMapsApiKey}>
                <GoogleMap
                    mapContainerStyle= {mapStyle}
                    zoom={9}
                    center={position}
                >
                    <Marker position={position} />
                </GoogleMap>
            </LoadScript>
        )}
        </>
        
    )
}
export default Map 