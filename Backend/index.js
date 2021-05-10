const express = require('express');

const app = express();
const server = require('http').createServer(app);
const userRouter = require('./routes/usermanager');
const orderRouter = require('./routes/orderManager');
const utilRouter = require('./routes/util');
const port = 5000;

const parser = require('body-parser')
const cors = require('cors')
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('send', (data) => {
        console.log('a message recieved');
        console.log(data);

        socket.broadcast.emit('rec_msg', data);
    })
})
app.use(cors());

app.use(parser.json());

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/utils', utilRouter);

app.use(express.static('./uploads'));

const stripe = require("stripe")("sk_test_51I3BwxDqNgbvmtKVwWusimWUmUhe7MLGZG5mX1UKVXvDXxn2b1IRTF1zZyST2ZwD84pcc2xt03wloRJsKplLHw6R003YxkmGoc");

server.listen(port, () => {

    console.log("Server Started! !");

});

app.post("/create-payment-intent", async (req, res) => {
    const data = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: data.amount,
        currency: 'inr'
    });

    res.status(200).json(paymentIntent);
});
