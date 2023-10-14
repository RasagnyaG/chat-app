import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

// custom hook to establish a socket connection
const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io("ws://localhost:8000");
    console.log(socketInstance);

    setSocket(socketInstance);

    // return () => {
    //   socketInstance.disconnect();
    // };
  }, []);

  return socket;
};

export default useSocket;
