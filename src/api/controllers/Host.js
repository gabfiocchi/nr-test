/* eslint-disable class-methods-use-this */
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
        this.configs = configs;
        this.hosts = [];
        this.hostsApps = {};
        this.appsWithHosts = {};
        this.init();
    }

    init() {
        const hostsNames = [];
        const hosts = [];

        this.data.forEach((app) => {
            const appId = this.createAppId();
            this.appsWithHosts[appId] = [];

            app.host.forEach(((hostName) => {
                if (!hostsNames.includes(hostName)) {
                    hostsNames.push(hostName);
                    this.hostsApps[hostName] = new HostModel(hostName);
                }

                const appParsed = new ApplicationModel(
                    appId,
                    app.name,
                    app.apdex,
                    app.version,
                    app.contributors
                );

                this.appsWithHosts[appId].push(hostName);
                this.hostsApps[hostName].apps.push(appParsed);
                this.hostsApps[hostName].apps = this.sortApdex(this.hostsApps[hostName].apps);
            }));
        });

        this.hosts = hosts;
    }

    getHostsApps() {
        return this.normalizeHosts(this.hostsApps);
    }

    getAppsWithHosts() {
        return this.appsWithHosts;
    }

    createAppId() {
        return Math.random().toString(36).substr(2, 16);
    }

    applyMaxAppsApdex(apps) {
        return apps.slice(0, this.configs.MAX_APPS_APDEX);
    }

    normalizeHosts(hosts) {
        const normalized = [];

        Object.keys(hosts).forEach((host) => {
            normalized.push(hosts[host]);
        });

        return normalized;
    }

    sortApdex(apps) {
        return apps.sort((a, b) => (b.apdex - a.apdex));
    }

    getTopAppsByHost(hostName) {
        if (!this.hostsApps[hostName]) {
            return [];
        }

        const apps = this.sortApdex(this.hostsApps[hostName].apps);

        return this.applyMaxAppsApdex(apps);
    }

    removeAppFromHosts(id) {
        if (!this.appsWithHosts[id]) {
            return null;
        }

        const hostsApps = JSON.parse(JSON.stringify(this.hostsApps));

        this.appsWithHosts[id].forEach((hostName) => {
            const apps = hostsApps[hostName].apps.filter((app) => app.id !== id);

            hostsApps[hostName].apps = this.applyMaxAppsApdex(this.sortApdex(apps));
        });

        return this.normalizeHosts(hostsApps);
    }

    addAppToHosts({
        name,
        host,
        contributors = [],
        apdex = 1,
        version = null
    }) {
        if (!name && !host) {
            return null;
        }

        let hostsArray = host;

        if (!Array.isArray(host)) {
            hostsArray = [];
            hostsArray.push(host);
        }

        hostsArray = hostsArray.filter((item, index) => hostsArray.indexOf(item) === index);

        // this.data.push({
        //     name,
        //     host: hostsArray,
        //     contributors,
        //     apdex,
        //     version
        // });

        const appId = this.createAppId();

        const appParsed = new ApplicationModel(
            appId,
            name,
            apdex,
            version,
            contributors
        );

        // this.appsWithHosts[appId] = hostsArray;

        // hostsArray.forEach((hostName) => {
        //     if (!this.hostsApps[hostName]) {
        //         this.hostsApps[hostName] = new HostModel(hostName);
        //     }
        //     this.hostsApps[hostName].apps.push(appParsed);
        // });

        return { app: appParsed, hosts: hostsArray };
    }
}
