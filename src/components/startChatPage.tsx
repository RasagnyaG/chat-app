'use client'
import React, { useState } from 'react'
import StartChatButton from './startChatButton';
import TryAgain from './errors/tryAgain';


const StartChatPage = () => {

    const [notfound, setNotFound] = useState(false)
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Find someone to chat with...</h1>
            <StartChatButton setNotFound={setNotFound} />
            {
                notfound && <TryAgain message='No match found' />
            }
        </div>
    )
}

export default StartChatPage
