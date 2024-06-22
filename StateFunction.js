import { useState } from "react"

export default function StateFunction(){
    const userName=useState('Gokul')
    const userPlace=useState('22')
    return(
        <div>
            <h1>State-Function Component</h1>
            <p>{userName}</p>
            <p>{userPlace}</p>
        </div>
    )
}