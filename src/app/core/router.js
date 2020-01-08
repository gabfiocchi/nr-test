export default {
    initialize(routes) {
        this.routes = routes;
        // Listen on hash change:
        window.addEventListener('hashchange', () => this.renderPage());

        // Listen on page load:
        window.addEventListener('load', () => this.renderPage());
    },
    setState({ data, title, route }) {
        window.history.pushState(data, title, route);
    },
    async renderPage() {
        const app = document.getElementById('root');
        const request = this.parseRequesURL();

        // TODO: agregar el 404.
        const page = this.routes[request];
        app.innerHTML = await page.render();
    },
    parseRequesURL() {
        const url = window.location.hash.slice(1).toLowerCase() || '/';
        const hash = url.split('/');

        const resource = hash[1] || null;
        const id = hash[2] || null;

        let parsedURL = '/';
        if (resource) {
            parsedURL += resource;
        }
        if (id) {
            parsedURL += `/${id}`;
        }
        return parsedURL;
    }
};
