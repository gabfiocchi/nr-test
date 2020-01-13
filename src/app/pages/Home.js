/* eslint-disable class-methods-use-this */
import Item from '../components/item';

export default class {
    constructor() {
        this.state = {
            email: null,
            viewGrid: true,
            hosts: []
        };

        document.toggleView = () => {
            this.state.viewGrid = !this.state.viewGrid;

            this.update();
        };

        // this.requestUserEmail();
    }

    async fetchData() {
        this.state.test = true;
        let hosts;
        // try {
        //     // const apiEndpoint = 'https://nr-apdex.herokuapp.com';
        //     const apiEndpoint = 'http://localhost:8100';
        //     this.state.hosts = await (await fetch(`${apiEndpoint}/api/hosts`)).json();
        // } catch (error) {
        //     // eslint-disable-next-line no-console
        //     console.log('error', error);
        //     this.fetchData();
        // }
        return hosts;
    }

    requestUserEmail(message) {
        // eslint-disable-next-line no-alert
        const email = prompt(message || 'Enter you email:');
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email && re.test(String(email).toLowerCase())) {
            this.state.email = email;
        } else {
            this.requestUserEmail('Please enter a valid email');
        }
    }

    async update() {
        const app = document.getElementById('root');

        app.innerHTML = await this.render();
    }

    async render() {
        return `
            <header>
                <h1>Apps by Host</h1>
                <h2>for user ${this.state.email}</h2>
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
