import React, { useEffect, useState, useContext } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext();

export const useSocket = () => {
    return useContext(SocketContext)
}



export const SocketProvider = ({id, children}) => {
    const [socket, setSocket] = useState();

    useEffect(() => {
        const newSocket = io('http://localhost:5000',
        { query: { id },
        transports: ['websocket', 'polling', 'flashsocket'] }
    );
    setSocket(newSocket)

    return() => newSocket.close();
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
