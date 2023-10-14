'use client'
import useSocket from "@/hooks/useSocket";
import Cookies from "js-cookie"
import { useRef } from "react";
import { Socket, io } from "socket.io-client";



const StartChatButton = () => {
    const socket = io("ws://localhost:8000");
    const socketRef = useRef<Socket | null>(null);
    socketRef.current = socket;
    socketRef.current.connect()
    const handlestartChat = () => {
        if (socketRef) {
            console.log(Cookies.get("token"))
            console.log(socketRef.current)
            // Emit the 'startChat' event
            socketRef.current?.emit('startChat', Cookies.get("token"));
            // after matching
            socketRef.current?.on('matched', (chatRoomId) => {
                console.log(chatRoomId)
            });
        }
    };

    return (
        <button onClick={handlestartChat}>Join Queue</button>
    );
}

export default StartChatButton;
