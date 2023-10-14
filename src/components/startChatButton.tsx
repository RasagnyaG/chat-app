'use client'
import "@/styles/chat.css"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";



const StartChatButton = ({ setNotFound }: { setNotFound: Function }) => {

    const router = useRouter();
    const socket = io("ws://localhost:8000");
    const socketRef = useRef<Socket | null>(null);
    socketRef.current = socket;

    // event listeners
    socketRef.current.on('matched', (chatRoomId) => {
        router.push("/" + chatRoomId)
    });

    socketRef.current.on('error', (msg) => {
        console.log(msg);
        setNotFound(true);
    });


    const handlestartChat = () => {
        if (socketRef.current) {
            // Emit the 'startChat' event
            socketRef.current.emit('startChat', Cookies.get("token"));
        }
    };

    return (
        <button onClick={handlestartChat} className="start-chat-btn">Start A Chat</button>
    );
}

export default StartChatButton;
