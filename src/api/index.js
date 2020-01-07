import { Router } from 'express';
import * as data from './host-app-data.json';

export default (() => {
    const router = Router();

    router.get('/', (req, res) => {
        res.status(200).json(data)
    });

    return router;
})();
