var http = require('http');
var app = require('./backend/app');

const port = process.env.PORT || 8000 ;

app.set('port',port);
const server = http.createServer(app);

server.listen(port,()=>{
    console.log('The backend is initialised');
})