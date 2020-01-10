import { Router } from 'express';
import Host from './controllers/Host';

export default (() => {
    const router = Router();
    const HostController = new Host();


    router.get('/all', (_req, res) => {
        res.status(200).json(HostController.data);
    });

    router.get('/hosts/:host', (req, res) => {
        if (!req.params.host) {
            res.status(404).json('Error not found');
        }
        console.log('1, req.params.host', req.params.host);
        res.status(200).json(HostController.getTopAppsByHost(req.params.host));
    });

    return router;
})();
