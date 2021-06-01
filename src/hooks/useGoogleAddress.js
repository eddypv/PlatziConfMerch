import { useState, useEffect } from "react"
import axios from 'axios'
import Config from '../utils/Config'

const useGoogleAddress = address =>{
    const [map, setMap] = useState({})
    const API =`http://api.positionstack.com/v1/forward?access_key=${Config.positionStackApiKey}&query=${address}`
    useEffect(async ()=>{
        const response = await axios.get(API) 
        const first=response.data.data[0] 
        
        setMap({
            lat:first.latitude,
            lng:first.longitude
        })
    },[])
    return map
}
export default useGoogleAddress