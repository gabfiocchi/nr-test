import './main.scss';
import { App } from './core';
import HomePage from './pages/Home';
import ErrorPage from './pages/404';

App.create({
    routes: {
        '/': new HomePage(),
        '/error': ErrorPage
    }
});
