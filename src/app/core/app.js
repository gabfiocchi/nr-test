import HomePage from '../pages/Home';

export default {
    create(options) {
        window.onload = () => {
            const main = document.createElement('main');

            main.setAttribute('id', 'root');
            document.body.appendChild(main);

            this.initialize(options);
        };
    },
    async initialize() {
        const app = document.getElementById('root');
        const page = new HomePage();

        if (page.fetchData) {
            await page.fetchData();
        }
        app.innerHTML = await page.render();
    }
};
