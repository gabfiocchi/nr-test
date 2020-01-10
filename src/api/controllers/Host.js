import HostModel from '../models/Host';
import ApplicationModel from '../models/Application';

import data from '../data/host-app-data.json';

const configs = {
    MAX_APPS_APDEX: 25,
    MAX_APPS_HOST: 5
};

export default class Host {
    constructor() {
        this.data = data;
        this.hosts = [];
        this.hostsApps = {};
        this.init();
    }

    init() {
        const hostsNames = [];
        const hosts = [];

        this.data.forEach((app) => {
            app.host.forEach(((hostName) => {
                if (!hostsNames.includes(hostName)) {
                    hostsNames.push(hostName);
                    this.hostsApps[hostName] = new HostModel(hostName);
                }

                const appParsed = new ApplicationModel(
                    app.name,
                    app.apdex,
                    app.version,
                    app.contributors
                );

                this.hostsApps[hostName].apps.push(appParsed);
            }));
        });

        this.hosts = hosts;
    }

    getTopAppsByHost(hostname) {
        return this.hostsApps[hostname].apps
            .sort((a, b) => (b.apdex - a.apdex))
            .slice(0, configs.MAX_APPS_APDEX);
    }

    static addAppToHosts() { }

    static removeAppFromHosts() { }
}
