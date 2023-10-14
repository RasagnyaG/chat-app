import { useRouter } from 'next/router'
import React from 'react'
import "@/styles/globals.css"

const ChatRoom = () => {
    const router = useRouter()
    const { chatRoom } = router.query

    return (
        <div>
            <h1 style={{ color: "red" }}>{chatRoom}</h1>
        </div>
    )
}

export default ChatRoom
