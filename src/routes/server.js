const express = require("express");
const morgan = require("morgan");

const Server = express();
Server.use(express.json());
Server.use(morgan('dev'));
Server.use((req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



const PORT = 3001;
Server.listen(PORT, () => {
    console.log(`Server raised in PORT: ${PORT}`);
})
	