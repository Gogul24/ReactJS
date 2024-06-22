import React, { useEffect, useState } from 'react'
import './wifi.css'

const Wifi = () => {
    const [isOnline,setIsOnline] = useState(navigator.onLine)

    useEffect(()=>{
        const handleStatusChange =()=>{
            setIsOnline(navigator.onLine)
        }

        window.addEventListener('online',handleStatusChange)
        window.addEventListener('offline',handleStatusChange)

        return()=>{
            window.removeEventListener('online',handleStatusChange)
            window.removeEventListener('offline',handleStatusChange)
        }
    },[isOnline])
  return (
    <div>
        <h1>Welcome</h1>
        <h2>Turn on/off ur wifi to see the results</h2>
        {
            isOnline?(<h1 class="online">You are online</h1>):(<h1>You are offline</h1>)
        }
    </div>
  )
}

export default Wifi