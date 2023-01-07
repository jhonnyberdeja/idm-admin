require("dotenv").config();

const server = require("./boot/server");

const port = parseInt(process.env.PORT);

server.listen(port, ()=>{
    console.log(`Server on http://localhost:${port}`);
})