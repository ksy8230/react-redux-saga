const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser');

server.use(cors({
    origin : "http://localhost:8080",
    //credentials : true,
}));
server.use(express.json());
server.use(express.urlencoded());
server.use(bodyParser.json());

const source = require('./json/fe-problems.json');
const feSimilars = require('./json/fe-similars.json');


server.get('/problems/similar/', (req, res) => { // 유사문제 로드
    res.send(feSimilars.data);
});

server.get('/problems/', (req, res) => { // 메인문제 로드
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

    res.send(source.data);
});

server.listen(3000, () => {
    console.log('express running on 3000');
});