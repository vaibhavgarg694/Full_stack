const express = require('express');

const app = express();
const server =require('http').createServer(app);
const mongoose = require('./connection');
const userRouter =require('./routes/usermanager');
const mobileRouter =require('./routes/mobilemanager');
const port=5000;

const parser=require('body-parser')
const cors=require('cors')
const io =require('socket.io')(server);

io.on('connection',(socket)=>{
     console.log('user connected');
    socket.on('send',(data) => {
        console.log('a message recieved');
        console.log(data);
    
     socket.broadcast.emit('rec_msg',data);
    })
})
app.use(cors());

app.use(parser.json());

app.use('/user',userRouter);

app.use('/mobile',mobileRouter);


app.get('/add',(req,res)=> {
    console.log('Request Recieved');
    res.send(' Here is the response');
})

server.listen(port,() => {

    console.log("Server Started! !");
    console.log('Hi');

});
