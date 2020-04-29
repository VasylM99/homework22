  
import io from "socket.io-client";

const CHAT_SERVER = "https://tweets.globalofficiallottery.com";

const socket = io(CHAT_SERVER, {
    transport: ["polling"],
    path: "/chat/"
});

export default socket;