import { useRouter } from 'next/router'
import React from 'react'
import "@/styles/globals.css"
import "@/styles/chat.css"
import ChatRoom from '@/components/chatRoom'

const ChatRoompage = () => {
    const router = useRouter()
    const { chatRoom } = router.query

    return (
        chatRoom && <ChatRoom roomId={chatRoom as string} />
    )
}

export default ChatRoompage
