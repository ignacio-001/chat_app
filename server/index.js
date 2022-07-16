const express = require("express");
const app= express();
const http =require("http")
const cors =require("cors")
import { Server } from "socket.io";
app.use(cors());
const server=http.createServer(app);
const io= new Server(server,{
    cors:{
        origin: "http://localhost:300",
        methods: ["GET","POST"],
    },  
})
io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id);
    });
});
server.listen(3001,()=>{
    console.log("server running");
});
