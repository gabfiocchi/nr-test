import router from './router';

export default {
    create(options) {
        window.onload = () => {
            const main = document.createElement('main');
            main.setAttribute('id', 'root');
            document.body.appendChild(main);
        };
        this.initialize(options);
    },
    initialize({ routes }) {
        router.initialize(routes);
    }
};
