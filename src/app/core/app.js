import router from './router';

export default {
    create(options) {
        console.log('options', options);
        window.onload = () => {
            const main = document.createElement('main');
            main.setAttribute('id', 'app');
            document.body.appendChild(main);
        };
        this.initialize(options);
    },
    initialize({ routes }) {
        router.initialize(routes);
    }
};
