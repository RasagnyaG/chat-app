import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();

// custom hook to establish a socket connection
const useSocket = () => {
  // const socketRef = useRef<Socket | null>();
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    // console.log("socket");
    // console.log(process.env.SOCKET_URL);
    const socket = io("ws://localhost:8000");
    setSocket(socket);
    console.log(socket);
  }, []);

  return socket;
};

export default useSocket;
