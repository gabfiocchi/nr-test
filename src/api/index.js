import { Router } from 'express';
import HostController from './controllers/Host';

export default (() => {
    const router = Router();
    const HostCtrl = new HostController();

    router.get('/all', (_req, res) => {
        res.status(200).json(HostCtrl.data);
    });

    router.get('/hosts', (_req, res) => {
        res.status(200).json(HostCtrl.getHostsApps());
    });

    router.get('/hosts/:host', (req, res) => {
        res.status(200).json(HostCtrl.getTopAppsByHost(req.params.host));
    });

    router.get('/hosts/remove/:id', (req, res) => {
        const data = HostCtrl.removeAppFromHosts(req.params.id);
        if (data) {
            return res.status(200).json(data);
        }
        return res.status(404).json({
            message: `Apps with id ${req.params.id} not exists.`
        });
    });

    router.get('/apps', (_req, res) => {
        res.status(200).json(HostCtrl.getAppsWithHosts());
    });

    router.post('/apps', (req, res) => {
        res.status(200).json(HostCtrl.addAppToHosts(req.body));
    });

    return router;
})();
