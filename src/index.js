// import path from "path";
import http from 'http';
import express from "express";

import api from './api'

const app = express();
const server = http.Server(app);

app.use('/api', api);
app.use('/', (req, res) => {
    res.status(200).send('La API funciona correctamente');
});

// app.get('*', function (req, res) {
//     res.status(404).send('Requested page not found')
// });
const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log(`>>>>> Server port => http://localhost:${port} <<<<<`)
});