import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();

// custom hook to establish a socket connection
const useSocket = () => {
  // const socketRef = useRef<Socket | null>();
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    console.log("socket");
    const socket = io(
      "https://chat-app-socket.kindpebble-2db3b833.australiaeast.azurecontainerapps.io"
    );

    socket.on("connect", () => {
      console.log("Connected to the socket server");
    });

    setSocket(socket);
    console.log(socket);
  }, []);

  return socket;
};

export default useSocket;
