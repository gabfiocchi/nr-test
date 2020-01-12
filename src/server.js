import http from 'http';
import cors from 'cors';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import api from './api';

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);
app.use('/', express.static(path.join(__dirname, '../public')));

const port = process.env.PORT || 8100;
server.listen(port, () => {
    console.log(`>>>>> Server port => http://localhost:${port} <<<<<`);
});
