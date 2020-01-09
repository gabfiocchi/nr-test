import http from 'http';
import express from 'express';
import path from 'path';

import api from './api';

const app = express();
const server = http.Server(app);

app.use('/api', api);
app.use('/', express.static(path.join(__dirname, '../public')));

// app.get('*', function (req, res) {
//     res.status(404).send('Requested page not found')
// });
const port = process.env.PORT || 8100
server.listen(port, () => {
    console.log(`>>>>> Server port => http://localhost:${port} <<<<<`);
});
