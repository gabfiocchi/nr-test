/* eslint-disable no-undef */
/* jest describe */
import App from './app';
// import HomePage from '../pages/Home';
// const HomePage = require('../pages/Home');
// jest.mock('../pages/Home');

const application = new App();

describe('index', () => {
    beforeEach(() => {
        application.create();
        window.onload();
    });

    it('should create the app', () => {
        const main = document.getElementById('root');
        expect(main).toBeTruthy();
    });
    // it.only('should render the Home page', () => {
    //     application.initialize();
    //     // const main = document.getElementsByClassName('container')[0];
    //     // expect(main).toBeTruthy();

    //     expect(HomePage.fetchData).toHaveBeenCalledTimes(1);
    //     expect(HomePage.render).toHaveBeenCalledTimes(1);
    // });
});
