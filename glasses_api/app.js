var express = require('express');
var app=express();
require("dotenv").config();
var cors = require('cors')
app.use(cors())

const server = require('http').createServer(app);
const io = require("socket.io")(server,{
	cors:{
		origin:"*",
	}
});

// console.log("111",io)
const users = {}

io.on('connection', socket =>{

	//console.log("what is socket", socket)
	//console.log("socket is active to be connected")

	socket.on("chat",(payload) =>{
		//console.log("what is payload", payload)
		io.emit("chat", payload)
	})
})
	// socket.on('new-user-joined', name =>{
	// 	users[socket.id] = name;
	// 	socket.broadcast.emit('user-joined', name)
	// })

	// socket.on('send', message =>{
	// 	socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
	// })


var app_v1 = require('./modules/v1/route_manager');
//const { Socket } = require('socket.io');

// Setting up express for text parser
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', app_v1);


// Listen to port for app
// try {
// 	server = app.listen(process.env.PORT);
// 	console.log("Connected to api_glasses app On PORT : "+process.env.PORT);
// } catch (err) {
// 	console.log("Failed to connect");
// }

server.listen(process.env.PORT,() =>{
	console.log("server is listning at port 4000...")
})

