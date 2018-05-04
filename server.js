const express = require('express');
const morgan = require('morgan')

const app = express();

app.get('/',(req,res) => {
	console.log(req.connection.remoteAddress);
	res.status(200);
	res.send("<h1>Welcome</h1>");
})


app.listen(3000,() => {
	console.log("Server running at port 3000");
});