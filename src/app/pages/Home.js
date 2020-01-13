/* eslint-disable class-methods-use-this */
import Item from '../components/item';

export default class {
    constructor() {
        this.state = {
            viewGrid: true,
            hosts: [],
            retry: 0
        };

        document.toggleView = () => {
            this.state.viewGrid = !this.state.viewGrid;

            this.update();
        };
    }

    async fetchData() {
        let hosts;
        try {
            const apiEndpoint = 'http://localhost:8100';
            this.state.hosts = await (await fetch(`${apiEndpoint}/api/hosts`)).json();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('error', error);
            if (this.state.retry < 2) {
                // eslint-disable-next-line no-plusplus
                this.state.retry = ++this.state.retry;
                this.fetchData();
            }
        }
        return hosts;
    }

    async update() {
        const app = document.getElementById('root');

        app.innerHTML = await this.render();
    }

    render() {
        return `
            <header>
                <h1>Apps by Host</h1>
                <h2>for user averylongemailadress@companyname.com</h2>
                <div class="form-group">
                    <input type="checkbox" id="checkbox" ${this.state.viewGrid ? 'checked' : ''} onChange="toggleView()">
                    <label for="checkbox">${this.state.viewGrid ? 'Show as an awesome grid' : 'Show as list'}</label>
                </div>
            </header>
            <div class="${this.state.viewGrid ? 'container' : 'container listview'}">                
                ${this.state.hosts.map((host) => `
                <div class="card">
                    <div class="content">
                        <h3 class="title">${host.name}</h3>
                        <ul>
                            ${host.apps.slice(0, 5).map((app) => new Item(app).render()).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
            </div>
        `;
    }
}
