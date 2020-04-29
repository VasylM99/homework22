  
import io from "socket.io-client";

const CHAT_SERVER = "http://77.120.108.119:9999";

const socket = io(CHAT_SERVER, {
    transport: ["polling"],
    path: "/chat/"
});

export default socket;