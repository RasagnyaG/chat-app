import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

// custom hook to establish a socket connection
const useSocket = () => {
  const socketRef = useRef<Socket | null>();

  useEffect(() => {
    socketRef.current = io("ws://localhost:8000");
  }, []);

  return socketRef.current;
};

export default useSocket;
