const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser');

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use(bodyParser.json());

const source = require('./json/fe-problems.json');
const feSimilars = require('./json/fe-similars.json');


server.get('/problems/similar/', (req, res) => { // 유사문제 로드
    res.header("Access-Control-Allow-Origin", "*");
    res.send(feSimilars.data);
});

server.get('/problems/', (req, res) => { // 메인문제 로드
    res.header("Access-Control-Allow-Origin", "*");
    res.send(source.data);
});

server.listen(3000, () => {
    console.log('express running on 3000');
});